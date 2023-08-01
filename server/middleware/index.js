const { firebase } = require('../server.js');
const { getAuth } = require('firebase-admin/auth');
const db = require('../db');

module.exports = {

  decodeToken: (req, res, next) => {
    const token = req.headers.authorization || null;

    if (!token) {
      req.headers.uid = null;
      return next();
    } else {
      getAuth(firebase)
      .verifyIdToken(token)
      .then((decodedToken) => {
        req.headers.uid = decodedToken.uid;
        return decodedToken.uid;
        })
        .then((uid) => {
          return db.query('SELECT id FROM users WHERE uid = $1', [uid]);
        })
        .then((userId) => {
          req.headers.userId = userId;
        })
        .catch((err) => {
          console.error('Error decoding token:', err);
          res.status(403).send({ error: err });
        });
    }

  }

};