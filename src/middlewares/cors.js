const cors = require('cors')

const ACCEPTED_ORIGINS = [
    'http://127.0.0.1:5500',
    'http://localhost:8080',
    'http://localhost:1234',
    'https://movies.com',
    'https://midu.dev'
]



const corsMiddleware = ({
    acceptedOrigins = ACCEPTED_ORIGINS 
} = {}) => cors({

    origin: (origin, callback) => {
        if(acceptedOrigins.includes(origin)) {
            return callback(null, true)
        }
        if(!origin) {
            return callback(null, true)
        }
        return callback(new Error('Not allowed by CORS'))
    }

})



module.exports = { corsMiddleware }
