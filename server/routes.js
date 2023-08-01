var controller = require('./controllers');
var router = require('express').Router();

// GET /api/conversations/ (authentication required)
router.get('/conversations', controller.getConversations);

// GET /api/messages/:conversation_id (authentication required)
router.get('/messages/:conversation_id', controller.getMessagesByConversationId)

// POST /api/messages/ (authentication required)
router.post('/messages', controller.createMessage);

// PUT /api/conversations/:conversation_id/archive (authentication required)
router.put('/conversations/:conversation_id/archive', controller.archiveConversation);

// DELETE /api/messages/:message_id (authentication required)
router.delete('/messages/:message_id', controller.deleteMessage);

module.exports = router;

