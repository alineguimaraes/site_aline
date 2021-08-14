// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

app.use(express.urlencoded())
app.use(express.json())

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

app.post("/form", function (req, res) {
  console.log('conteúdo do formulário: ', req.body)
  res.sendFile('public/obrigado.html', { root : __dirname})
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
