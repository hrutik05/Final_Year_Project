import ChatHistory from '../models/ChatHistory.js';
import dotenv from 'dotenv';

dotenv.config();

// Regex patterns for local law validation
const LAW_PATTERNS = [

  // ================= CONSTITUTIONAL LAW =================
  /\bconstitution\b/i,
  /\bconstitutional\b/i,
  /\barticle\s\d+/i,
  /\barticle\s(1[0-9]|2[0-9]|3[0-9]|4[0-9])\b/i,
  /\bfundamental\s+rights\b/i,
  /\bdirective\s+principles\b/i,
  /\bdpsp\b/i,
  /\bjudicial\s+review\b/i,
  /\bwrit\s+petition\b/i,
  /\bhabeas\s+corpus\b/i,
  /\bmandamus\b/i,
  /\bcertiorari\b/i,
  /\bprohibition\b/i,
  /\bquo\s+warranto\b/i,
  /\bpublic\s+interest\s+litigation\b/i,
  /\bpil\b/i,
  /\bseparation\s+of\s+powers\b/i,
  /\bfederalism\b/i,
  /\bbasic\s+structure\b/i,
  /\bconstitutional\s+remedy\b/i,

  // ================= CRIMINAL LAW =================
  /\bipc\b/i,
  /\bBharatiya Nyaya Sanhita\b/i,
  /\bmarale\b/i,
  /\bbns\b/i, // Bharatiya Nyaya Sanhita
  /\bcrpc\b/i,
  /\bbnss\b/i, // Bharatiya Nagarik Suraksha Sanhita
  /\bfir\b/i,
  /\barrest\b/i,
  /\bpolice\s+custody\b/i,
  /\bjudicial\s+custody\b/i,
  /\bbail\b/i,
  /\banticipatory\s+bail\b/i,
  /\bcharge\s*sheet\b/i,
  /\binvestigation\b/i,
  /\btrial\b/i,
  /\boffence\b/i,
  /\bcognizable\b/i,
  /\bnon\s*cognizable\b/i,
  /\bmurder\b/i,
  /\bhomicide\b/i,
  /\brape\b/i,
  /\bsexual\s+offence\b/i,
  /\btheft\b/i,
  /\brobbery\b/i,
  /\bdacoity\b/i,
  /\bcheating\b/i,
  /\bforgery\b/i,
  /\bcriminal\s+breach\s+of\s+trust\b/i,
  /\bpunishment\b/i,
  /\bconviction\b/i,
  /\bacquittal\b/i,
  /\bprobation\b/i,
  /\bsection\s\d+/i,
  /\bsection\s(1[0-9]{2}|2[0-9]{2}|3[0-9]{2}|4[0-9]{2}|5[0-9]{2}|6[0-9]{2}|7[0-9]{2}|8[0-9]{2}|9[0-9]{2})\b/i,
  

  // ================= CIVIL LAW =================
  /\bcivil\b/i,
  /\bcpc\b/i,
  /\bcivil\s+procedure\b/i,
  /\bsuit\b/i,
  /\bplaint\b/i,
  /\bwritten\s+statement\b/i,
  /\binjunction\b/i,
  /\btemporary\s+injunction\b/i,
  /\bpermanent\s+injunction\b/i,
  /\bdamages\b/i,
  /\bcompensation\b/i,
  /\bspecific\s+performance\b/i,
  /\bspecific\s+relief\b/i,
  /\bbreach\s+of\s+contract\b/i,
  /\bcontract\b/i,
  /\bagreement\b/i,
  /\bconsideration\b/i,
  /\bvoid\s+contract\b/i,
  /\bvoidable\s+contract\b/i,
  /\blimitation\b/i,
  /\bres\s+judicata\b/i,
  /\bappeal\b/i,
  /\bdecree\b/i,
  /\bexecution\b/i,

  // ================= PROPERTY LAW =================
  /\bproperty\b/i,
  /\bland\b/i,
  /\breal\s+estate\b/i,
  /\bimmovable\s+property\b/i,
  /\bmovable\s+property\b/i,
  /\bownership\b/i,
  /\bpossession\b/i,
  /\btitle\b/i,
  /\btitle\s+deed\b/i,
  /\bsale\s+deed\b/i,
  /\bgift\s+deed\b/i,
  /\blease\b/i,
  /\blicence\b/i,
  /\btenancy\b/i,
  /\brent\b/i,
  /\beviction\b/i,
  /\bpartition\b/i,
  /\binheritance\b/i,
  /\bsuccession\b/i,
  /\bwill\b/i,
  /\btransfer\s+of\s+property\b/i,
  /\bmutation\b/i,
  /\bencumbrance\b/i,
  /\bmortgage\b/i,

  // ================= MARATHI (ENGLISH TYPING) =================

  // ---- CRIMINAL LAW (Marathi typed in English) ----
  /\bkoni\s+marle\b/i,                 // कोणी मारले
  /\bkoni\s+marla\b/i,
  /\bkhun\b/i,                        // खून
  /\bhatya\b/i,                        // हत्या
  /\bmaran\b/i,
  /\bchori\b/i,                       // चोरी
  /\bchori\s+zali\b/i,
  /\bdaka\b/i,                        // दरोडा
  /\bfraud\b/i,
  /\bfasavnik\b/i,                    // फसवणूक
  /\bcheating\b/i,
  /\balpakalin\s+jamanat\b/i,         // जामीन
  /\bjamin\b/i,
  /\bpolice\s+case\b/i,
  /\bFIR\b/i,
  /\bgunha\b/i,                       // गुन्हा
  /\bapradh\b/i,                       // अपराध
  /\bshiksha\b/i,                     // शिक्षा
  /\bsaja\b/i,                         // सजा

  // ---- CIVIL LAW (Marathi typed in English) ----
  /\bkharab\s+karar\b/i,               // करार
  /\bkarar\b/i,
  /\bcontract\s+zala\b/i,
  /\bkarar\s+tuta\b/i,
  /\bnuksan\b/i,                      // नुकसान
  /\bharja\b/i,                        // भरपाई
  /\bstay\b/i,
  /\bstay\s+milala\b/i,
  /\bcase\s+file\b/i,
  /\bdivani\s+case\b/i,               // दिवाणी
  /\bsuit\b/i,

  // ---- PROPERTY LAW (Marathi typed in English) ----
  /\bjamin\b/i,                        // जमीन
  /\bmalmatta\b/i,                     // मालमत्ता
  /\bplot\b/i,
  /\bghar\b/i,
  /\bflat\b/i,
  /\bhouse\b/i,
  /\bkharedi\b/i,                     // खरेदी
  /\bvikri\b/i,                        // विक्री
  /\bsale\s+deed\b/i,
  /\bgift\s+deed\b/i,
  /\bbhade\b/i,                       // भाडे
  /\brent\b/i,
  /\bkararpatra\b/i,                  // करारपत्र
  /\bpossession\b/i,
  /\bevict\b/i,

  // ---- CONSTITUTIONAL LAW (Marathi typed in English) ----
  /\bsanvidhan\b/i,                    // संविधान
  /\bbharatiya\s+sanvidhan\b/i,
  /\bmulbhut\s+hakk\b/i,              // मूलभूत हक्क
  /\bhakk\b/i,
  /\bnyayalaya\b/i,                   // न्यायालय
  /\bsupreme\s+court\b/i,
  /\bhigh\s+court\b/i,
  /\bwrit\b/i,
  /\bjanahit\s+yachika\b/i,           // जनहित याचिका
  /\bPIL\b/i,
  /\bmala\b/i,
  /\bmazya\b/i,

  // ================= HINGLISH (ENGLISH TYPING) =================

  // ---- CRIMINAL (Hinglish / Marathi) ----
  /\bmar(di|a|ne|li|la)?\b/i,                 // mara, mar diya, marla
  /\bhatya\b/i,                               // hatya
  /\bkhun\b/i,                                // khoon / khun
  /\bmurder\b/i,
  /\bchaku\b/i,                               // knife attack
  /\bmaar\s+peet\b/i,                         // maar peet
  /\bmaarpeet\b/i,
  /\bmaar\b/i,
  /\bpeeta\b/i,
  /\bchori\b/i,                               // theft
  /\bchori\s+ki\b/i,
  /\bloot\b/i,                                // robbery
  /\bdaka\b/i,                                // dacoity
  /\bbalatkar\b/i,                            // rape
  /\bcheating\b/i,
  /\bthagi\b/i,
  /\bfarzi\b/i,                               // fraud
  /\bjail\b/i,
  /\bsaja\b/i,                                // punishment
  /\bpolice\s+complaint\b/i,
  /\bfir\b/i,
  /\bgiraftari\b/i,                           // arrest
  /\bgirftar\b/i,
  /\bjamin\b/i,                               // bail (jaman)
  /\bjam(i|ee)n\b/i,

  // ---- CIVIL (Hinglish / Marathi) ----
  /\bpaise\b/i,
  /\bpayment\b/i,
  /\bcontract\b/i,
  /\bagreement\b/i,
  /\bdeal\b/i,
  /\bpaise\s+nahi\s+diye\b/i,
  /\budhaar\b/i,                              // loan
  /\bkarza\b/i,
  /\bcompensation\b/i,
  /\bmuavza\b/i,
  /\bnuksan\b/i,
  /\bcase\s+file\b/i,
  /\bsuit\b/i,
  /\bnotice\b/i,
  /\blegal\s+notice\b/i,

  // ---- PROPERTY (Hinglish / Marathi) ----
  /\bzamin\b/i,
  /\bzameen\b/i,
  /\bplot\b/i,
  /\bghar\b/i,
  /\bmakaan\b/i,
  /\bflat\b/i,
  /\bproperty\b/i,
  /\bkiraya\b/i,                              // rent
  /\bbhada\b/i,
  /\btenant\b/i,
  /\bmalik\b/i,
  /\bowner\b/i,
  /\beviction\b/i,
  /\bkabza\b/i,                               // illegal possession
  /\bkabja\b/i,
  /\bpartition\b/i,
  /\bvara\b/i,                                // inheritance
  /\bwaris\b/i,
  /\bwaras\b/i,
  /\bwill\b/i,
  /\bvasiyat\b/i,
  /\bsale\s+deed\b/i,
  /\bregistry\b/i,

  // ---- CONSTITUTIONAL (Hinglish / Marathi) ----
  /\badhikar\b/i,                             // rights
  /\bhak\b/i,
  /\bmool\s+adhikar\b/i,
  /\bfundamental\s+right\b/i,
  /\bsamvidhan\b/i,                           // constitution
  /\bconstitution\b/i,
  /\bsarkar\b/i,
  /\bgovernment\b/i,
  /\bpulice\s+atyachar\b/i,
  /\bmanav\s+adhikar\b/i,
  /\bhuman\s+rights\b/i,
  /\bcourt\s+me\b/i,
  /\bwrit\b/i,
  /\bpill?\b/i


];
// Function to check if query is law-related
function isLawRelated(query) {
  return LAW_PATTERNS.some(pattern => pattern.test(query));
}

// Chatbot query handler with LOCAL validation only
export const chatbotQuery = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ success: false, message: 'Query is required' });
    }

    if (query.trim().length < 5) {
      return res.status(400).json({ success: false, message: 'Query must be at least 5 characters' });
    }

    // ✅ LOCAL VALIDATION ONLY - No Gemini API call here
    if (!isLawRelated(query)) {
      return res.status(403).json({
        success: false,
        message: 'Only Constitutional, Criminal, Civil & Property law queries are allowed'
      });
    }

    // Get model from app.locals (passed from index.js)
    const model = req.app.locals.geminiModel;

    if (!model) {
      console.error('Gemini model not initialized');
      return res.status(500).json({ success: false, message: 'AI service not configured' });
    }

    // ✅ SINGLE GEMINI API CALL - Get the response
    const result = await model.generateContent(query);
    const answer = result.response.text();

    return res.status(200).json({ success: true, data: { answer } });

  } catch (err) {
    console.error('Chatbot error:', err);

    if (err.status == 429) {
      return res.status(429).json({
        success: false,
        message: 'Gemini API quota exceeded. Please wait and retry.'
      });
    }

    return res.status(500).json({ success: false, message: 'Chatbot failed' });
  }
};

// Delete chat history item
export const deleteChatHistoryItem = async (req, res) => {
  try {
    const { userId } = req.params;
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ success: false, message: 'Query parameter is required' });
    }

    const chatHistory = await ChatHistory.findOne({ userId: userId });

    if (!chatHistory) {
      return res.status(404).json({ success: false, message: 'Chat history not found' });
    }

    const messageIndex = chatHistory.messages.findIndex(msg => msg.query === query);

    if (messageIndex === -1) {
      return res.status(404).json({ success: false, message: 'Message not found in chat history' });
    }

    chatHistory.messages.splice(messageIndex, 1);
    await chatHistory.save();

    res.status(200).json({ success: true, message: 'Message deleted successfully' });
  } catch (err) {
    console.error('Error deleting chat history item:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};