var express = require('express');
var router = express.Router();

var cancionesController = require("../controllers/cancionesController");


router.get("/canciones", cancionesController.list);
router.get("/generos", cancionesController.listGenero);
router.get('/canciones/:id', cancionesController.show);
router.post('/canciones', cancionesController.store);

module.exports = router;