require('dotenv').config()

const app = require('./app')
const connectDB = require('./db/mongodb')
const {appconfig, dbConfig} = require('./config')

async function initApp(appconfig, dbConfig) {
    try {
        await connectDB(dbConfig)
        app.listen(appconfig.port, () => console.log(`listen on ${appconfig.port}`))
    } catch (error) {
        console.error(error)
        process.exit(0)
    }
}

initApp(appconfig, dbConfig)