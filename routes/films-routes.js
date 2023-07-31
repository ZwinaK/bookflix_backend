var express = require('express');
var router = express.Router();
const checkAuth = require('../auth/check-auth')

const filmsControllers = require('../controllers/films-controllers')

router.get('/', filmsControllers.getFilms)

router.get('/:filmid', filmsControllers.getFilmById)

router.use(checkAuth);

router.post('/', filmsControllers.createFilm);

router.patch('/:filmid', filmsControllers.updateFilm);

router.delete('/:filmid', filmsControllers.deleteFilm);

module.exports = router;