var express = require('express');
var router = express.Router();

var cancionesController = require("../controllers/cancionesController");


router.get("/", cancionesController.list);
router.get('/:id', cancionesController.show);
router.post('/', cancionesController.store);

module.exports = router;