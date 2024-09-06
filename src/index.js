const express = require('express')
const app = express()
const { corsMiddleware } = require('./middlewares/cors.js')
const bodyParser = require('body-parser')
const movieRoutes = require('./routes/movieRoutes')


app.use(bodyParser.json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use('/movies', movieRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT,
    () => {
        console.log(`Servicio MVC en puerto ${PORT}`)
    }
)



