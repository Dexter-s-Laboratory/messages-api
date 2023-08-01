const model = require('../models');

module.exports = {

  getConversations: (req, res) => {
    var userId = req.headers.userId;

    model.getConversationsFromDB(userId)
      .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Error retrieving conversations from DB:', err);
        res.status(500).send({ error: err });
      });
  },

  getMessagesByConversationId: (req, res) => {

    var userId = req.headers.userId;
    var conversationId = req.params.conversation_id;

    model.getMessagesByConversationIdFromDB(userId, conversationId)
      .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Error retrieving messages from DB:', err);
        res.status(500).send({ error: err });
      });
  },

  createMessage: (req, res) => {
    var userId = req.headers.userId;

    var data = {
      authorId: userId,
      conversationId: req.body.conversationId,
      content: req.body.content
    };

    model.createMessageInDB(data)
      .then((result) => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch((err) => {
        console.error('Error creating messages in DB:', err);
        res.status(500).send({ error: err });
      });
  },

  archiveConversation: (req, res) => {
    var userId = req.headers.userId;
    var conversationId = req.params.conversation_id;

    model.archiveConversationInDB(userId, conversationId)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        console.error('Error archiving conversation in DB:', err);
        res.status(500).send({ error: err });
      });
  },

  deleteMessage: (req, res) => {

    var userId = req.headers.userId;
    var conversationId = req.params.message_id;

    model.deleteMessageFromDB(userId, messageId)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        console.error('Error deleting message in DB:', err);
        res.status(500).send({ error: err });
      });
  }
};