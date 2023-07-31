var express = require('express');
var router = express.Router();
const checkAuth = require('../auth/check-auth')

const livresControllers = require('../controllers/livres-controllers')

router.get('/', livresControllers.getLivres)

router.get('/:livreid', livresControllers.getLivreById)

router.use(checkAuth);

router.post('/', livresControllers.createLivre);

router.patch('/:livreid', livresControllers.updateLivre);

router.delete('/:livreid', livresControllers.deleteLivre);

module.exports = router;