var controller = require('./controllers');
var router = require('express').Router();

// GET /api/m/conversations/ (authentication required)
router.get('/conversations', controller.getConversations);

// GET /api/m/messages/:conversation_id (authentication required)
router.get('/messages/:conversation_id', controller.getMessagesByConversationId);

// POST /api/m/messages/ (authentication required)
router.post('/messages', controller.createMessage);

// PUT /api/m/conversations/:conversation_id/archive (authentication required)
router.put('/conversations/:conversation_id/archive', controller.archiveConversation);

// DELETE /api/m/messages/:message_id (authentication required)
router.delete('/messages/:message_id', controller.deleteMessage);

module.exports = router;

