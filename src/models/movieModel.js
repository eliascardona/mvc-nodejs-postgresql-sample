const pool = require('../config/database');

// Crear una nueva película
const createMovie = async (nombre) => {
  const query = 'INSERT INTO pelicula (nombre) VALUES ($1) RETURNING *'
  const values = [nombre]
  const result = await pool.query(query, values)
  return result.rows[0];
};

// Obtener todas las películas
const getAllMovies = async () => {
  const result = await pool.query('SELECT nombre FROM pelicula')
  return result.rows;
};

// Obtener una película por ID
const getMovieById = async (id) => {
  const query = 'SELECT * FROM pelicula WHERE pelicula_id id = $1'
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

// Actualizar una película
const updateMovie = async (id, nombre) => {
  const query = 'UPDATE pelicula SET nombre = $1, WHERE pelicula_id = $1'
  const values = [id, nombre];
  const result = await pool.query(query, values);
  return result.rows[0];
};

// Eliminar una película
const deleteMovie = async (id) => {
  const query = 'DELETE FROM pelicula WHERE pelicula_id = $1';
  const result = await pool.query(query, [id]);
  return result.rows[0];
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
}

