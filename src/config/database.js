const { Pool } = require('pg')

const pool = new Pool({
    user: 'eliascardona',
    host: 'localhost',
    database: 'prueba_bd_1',
    password: 'elias123',
    port: 5432,
})





module.exports = pool
