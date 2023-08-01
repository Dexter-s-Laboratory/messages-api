var db = require ('../db');

module.exports = {
  getConversationsFromDB: (userId) => {
    // Consider aggregating data to include most recent message for each conversation
    return db.query('SELECT * FROM conversations WHERE user_1_id = $1 OR user_2_id = $1', [userId]);
  },

  getMessagesByConversationIdFromDB: (userId, conversationId) => {
    // not authenticated in current state
    return db.query('SELECT * FROM messages WHERE conversation_id = $1');
  },

  createMessageInDB: (data) => {
    // not authenticated in current state
    return db.query('INSERT INTO messages (author_id, conversation_id, content) VALUES ($1, $2, $3)', [data.authorId, data.conversationId, data.content]);
  },

  archiveConversationInDB: (userId, conversationId) => {
    return db.query('UPDATE convesations SET active = false WHERE conversation_id = $1 AND (user_1_id = $2 OR user_2_id = $2)', [conversationId, userId]);
  },

  deleteMessageFromDB: (userId, messageId) => {
    return db.query('DELETE messages WHERE id = $1 AND author_id = $2', [messageId, userId]);
  }
};