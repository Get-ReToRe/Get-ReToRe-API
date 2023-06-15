const  { applicationDefault, initializeApp} = require('firebase-admin/app')
const  { getAuth } = require('firebase-admin/auth')

initializeApp({
  credential: applicationDefault()
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

  getAuth().verifyIdToken(token)
    .then( (decodedToken) => {
      console.log(decodedToken);
      next();
    })
    .catch((error) => {
      res.json(error);
    })
}

module.exports = authenticateUser;