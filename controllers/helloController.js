const sayHello = (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello world"
  })
}

const sayHelloName = (req, res) => {
  const {name} = req.params;
  res.status(200).json({
    success: true,
    message: `hello ${name}`
  })
}

module.exports = {
  sayHello, sayHelloName
}