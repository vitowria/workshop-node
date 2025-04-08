var express = require("express");
var app = express();

const path = require('path');
app.use(express.static("public"));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));


app.get("/", function (req, res) {
  //res.send("Olá Mundo!");
  res.render('index', { title: "Sobre gatos", message: "Gato laranja" });
});

const userRouter = require("./routes/about");
app.use("/about", userRouter);


app.listen(3000, function () {
  console.log("App Exemplo escutando na porta 3000!");
});

