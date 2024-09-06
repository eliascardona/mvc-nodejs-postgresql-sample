const movieModel = require('../models/movieModel');

const corsHandler = (request, response) => {
    if(request.method === 'OPTIONS') {
        response.set('Access-Control-Allow-Methods', 'OPTIONS, POST')
        response.set('Access-Control-Allow-Headers', 'Authorization, Content-Type')
        response.send('ok')
    }
}


// Controlador para obtener todas las películas
exports.getAllMovies = async (req, res) => {
    try {
        corsHandler(req, res)
        const movies = await movieModel.getAllMovies();
        res.status(200).json(movies);

    } catch (error) {
        if(error.message) {
            console.error(`CONTROLLER \\ GET-ALL \\ \n  ${error.message}`)
            res.status(500).json({ error: `Error ${error.message}` })
        }
        res.status(500).json({ error: 'Error al obtener las películas' });
    }


}



// Controlador para obtener una película por ID
exports.getMovieById = async (req, res) => {
    try {
        corsHandler(req, res)
        const movie = await movieModel.getMovieById(req.params.id)

        if(movie) {res.status(200).json(movie)}
        res.status(404).json({ error: 'Película no encontrada' })

    } catch(error) {
        res.status(500).json({ error: 'Error al obtener la película' })
    }


}




// Controlador para crear una nueva película
exports.createMovie = async (req, res) => {
    try {
        corsHandler(req, res)
        const { nombre } = req.body;
        const newMovie = await movieModel.createMovie(nombre);

        res.status(201).json({message: 'resource has created',resource: newMovie})

    } catch (error) {
        if(error.message) {
            console.error(`CONTROLLER \\ POST \\ \n  ${error.message}`)
            res.status(500).json({ error: `Error ${error.message}` })
        }
        res.status(500).json({ error: 'Error al crear la película' });
    }
}




// Controlador para actualizar una película
exports.updateMovie = async (req, res) => {
    try {
        corsHandler(req, res)
        const { nombre } = req.body;
        const updatedMovie = await movieModel.updateMovie(nombre);
        if(updatedMovie) {
            res.status(200).json(updatedMovie);
        }
        res.status(404).json({ error: 'Película no encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la película' });
    }


}



// Controlador para eliminar una película
exports.deleteMovie = async (req, res) => {
    try {
        corsHandler(req, res)
        const deletedMovie = await movieModel.deleteMovie(req.params.id)
        if(deletedMovie) {
            res.status(200).json(deletedMovie)
        }
        res.status(404).json({ error: 'Película no encontrada' })

    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la película' })
    }


}

