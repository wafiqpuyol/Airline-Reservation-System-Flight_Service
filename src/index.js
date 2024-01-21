const express = require('express');
const { ServerConfig } = require('./config')
const apiRoutes = require('./routes')

const app = express();


// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', apiRoutes)



app.listen(ServerConfig.PORT, async () => {
    console.log(`server is running at ${ServerConfig.PORT}`);
})