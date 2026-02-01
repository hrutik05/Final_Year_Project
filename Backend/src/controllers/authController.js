import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import ChatHistory from '../models/ChatHistory.js';
import { logInfo, logError } from '../utils/logger.js';

const JWT_SECRET = process.env.JWT_SECRET || 'please_change_this';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

function generateToken(user) {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export async function signup(req, res) {
  try {
    const { fullName, email, phone, password } = req.body;

    // Basic validation (mirror front-end rules)
    if (!fullName || fullName.trim().length < 1) {
      return res.status(400).json({ error: 'Full name must be at least 2 characters' });
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }
    if (!phone || !/^\+?[\d\s-()]{10,}$/.test(phone)) {
      return res.status(400).json({ error: 'Valid phone number is required' });
    }
    if (!password || password.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters and include uppercase, lowercase and number' });
    }

    // Check if user exists
    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = new User({ fullName: fullName.trim(), email: email.toLowerCase(), phone: phone.trim(), password: hashed });
    await user.save();

    const token = generateToken(user);

    logInfo('User signup', { email: user.email });

    res.status(201).json({
      user: { id: user._id, fullName: user.fullName, email: user.email, phone: user.phone },
      token
    });
  } catch (err) {
    logError(err instanceof Error ? err : new Error(String(err)), { action: 'signup' });
    res.status(500).json({ error: 'Registration failed' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ error: 'Invalid credentials' });

    const token = generateToken(user);

    logInfo('User login', { email: user.email });

    res.json({ user: { id: user._id, fullName: user.fullName, email: user.email, phone: user.phone }, token });
  } catch (err) {
    logError(err instanceof Error ? err : new Error(String(err)), { action: 'login' });
    res.status(500).json({ error: 'Login failed' });
  }
}

export async function loginWithFetch(email, password) {
  const res = await fetch('http://localhost:4000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (res.ok) {
    // data.token and data.user available
    // Note: localStorage is not available server-side; this function seems intended for client-side use
    // Keep for reference but avoid using localStorage here
    return data;
  }
  return null;
}

// Save chat history
export async function saveChatHistory(req, res) {
  try {
    const { userId, query, response } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId is required' });
    }

    let chatHistory = await ChatHistory.findOne({ userId });

    if (!chatHistory) {
      chatHistory = new ChatHistory({ userId, messages: [] });
    }

    chatHistory.messages.push({ query, response });
    await chatHistory.save();

    res.status(200).json({ success: true, message: 'Chat history saved successfully.' });
  } catch (error) {
    logError(error instanceof Error ? error : new Error(String(error)), { action: 'saveChatHistory' });
    res.status(500).json({ success: false, message: 'Failed to save chat history.', error: error.message });
  }
}

// Get chat history
export async function getChatHistory(req, res) {
  try {
    // Accept userId either as route param or query param for flexibility
    let userId = req.params?.userId || req.query?.userId;

    if (!userId) {
      return res.status(400).json({ success: false, message: 'userId is required (param or query)' });
    }

    // If userId looks like an ObjectId string, allow Mongoose to cast; otherwise attempt a safe cast
    try {
      // Using ChatHistory.findOne with the provided userId lets Mongoose cast strings to ObjectId
      const chatHistory = await ChatHistory.findOne({ userId });

      // If no document, return empty array rather than 404 so frontend can render an empty history
      if (!chatHistory) {
        return res.status(200).json({ success: true, data: [] });
      }

      return res.status(200).json({ success: true, data: chatHistory.messages });
    } catch (castErr) {
      // If cast fails or other DB error, log and return safe response
      logError(castErr instanceof Error ? castErr : new Error(String(castErr)), { action: 'getChatHistory.cast' });
      return res.status(200).json({ success: true, data: [] });
    }
  } catch (error) {
    logError(error instanceof Error ? error : new Error(String(error)), { action: 'getChatHistory' });
    res.status(500).json({ success: false, message: 'Failed to retrieve chat history.', error: error.message });
  }
}
