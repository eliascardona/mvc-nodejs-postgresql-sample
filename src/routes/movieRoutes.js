const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');


router.get('/all', (req, res) => movieController.getAllMovies(req, res))
router.post('/create',(req, res) => movieController.createMovie(req, res))

router.get('/id/:id',(req, res) => movieController.getMovieById(req, res))

router.put('/id/:id',(req, res) => movieController.updateMovie(req, res))
router.delete('/id/:id',(req, res) => movieController.deleteMovie(req, res))




module.exports = router;
