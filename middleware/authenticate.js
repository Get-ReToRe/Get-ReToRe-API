const  admin = require('firebase-admin')
var serviceAccount = require("../serviceaccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const authenticateUser = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(400).json({
      error:'unauthenticated please provide the token in header'
    })
    return;
  }

  const token = authHeader.split(' ')[1]

  admin.auth().verifyIdToken(token)
    .then( (decodedToken) => {
      // req.body.decodedToken = decodedToken;
      console.log(decodedToken);
      next();
    })
    .catch((error) => {
      res.json(error);
    })
}

module.exports = authenticateUser;