import express from 'express';
import { signup, login, saveChatHistory, getChatHistory } from '../controllers/authController.js';
import { chatbotQuery, deleteChatHistoryItem } from '../controllers/chatbotController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

// Save chat history
router.post('/chat-history', saveChatHistory);

// Get chat history
router.get('/chat-history/:userId', getChatHistory);

// Delete chat history item
router.delete('/chat-history/:userId', deleteChatHistoryItem);

// Chatbot query route
router.post('/chatbot/query', chatbotQuery);

export default router;
