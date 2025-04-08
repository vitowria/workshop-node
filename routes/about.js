var express = require("express");
var router = express.Router();

// Pagina inicial do rota
router.get("/", function (req, res) {
  res.send("About page");
});

//Segunda pagina dentro de about
router.get("/page2", function (req, res) {
  res.send("Pagina 2 dentro de about");
});

module.exports = router;

