const express = require('express')
const config = require('./config')
const cors = require('cors')
const loadRoutes = require('./routes')

console.clear()
const app = express()
app.use(cors())
loadRoutes(app)

app.listen(config.SERVER_PORT, () => {
    console.log(`\n[${config.APP_NAME.toUpperCase()}] :: está rodando na porta => ${config.SERVER_PORT}`)
})
