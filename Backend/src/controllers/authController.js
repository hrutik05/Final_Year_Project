import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
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
    localStorage.setItem('token', data.token);
  }
}
