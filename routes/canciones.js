var express = require('express');
var router = express.Router();

var cancionesController = require("../controllers/cancionesController");


router.get("/", cancionesController.list);

module.exports = router;