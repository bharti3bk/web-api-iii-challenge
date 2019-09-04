const express = require('express');
const server = express();  
const supllier = require('../routers/supllier') 

//golbal middleware
server.use(express.json());  
server.use("/supllier" , supllier)
//server and route handlers
server.get('/' , (req , res) => {
    res.status(200).json({api: 'up'})
})  

// export default server 
module.exports = server;