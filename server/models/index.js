var db = require ('../db');

module.exports = {
  getConversationsFromDB: (userId) => {
    return db.query('SELECT c.*, m.content, m.created_at FROM conversations c LEFT JOIN (SELECT conversation_id, content, created_at FROM messages WHERE conversation_id IN (SELECT id FROM conversations WHERE user_1_id = $1 OR user_2_id = $1) ORDER BY created_at DESC) m ON c.id = m.conversation_id WHERE c.user_1_id = $1 OR c.user_2_id = $1', [userId]);
  },

  getMessagesByConversationIdFromDB: (userId, conversationId) => {
    return db.query('SELECT m.* FROM messages m INNER JOIN conversations c ON m.conversation_id = c.id WHERE m.conversation_id = $1 AND (c.user_1_id = $2 OR c.user_2_id = $2)', [conversationId, userId]);
  },

  createMessageInDB: (data) => {
    return db.query('INSERT INTO messages (author_id, conversation_id, content) VALUES ($1, $2, $3) WHERE EXISTS (SELECT 1 FROM conversations WHERE id = $2 AND ($1 = user_1_id OR $1 = user_2_id))', [data.authorId, data.conversationId, data.content]);
  },

  archiveConversationInDB: (userId, conversationId) => {
    return db.query('UPDATE convesations SET active = false WHERE conversation_id = $1 AND (user_1_id = $2 OR user_2_id = $2)', [conversationId, userId]);
  },

  deleteMessageFromDB: (userId, messageId) => {
    return db.query('DELETE messages WHERE id = $1 AND author_id = $2', [messageId, userId]);
  }
};