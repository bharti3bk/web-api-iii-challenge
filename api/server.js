const express = require('express');
const server = express();

server.get('/' , (req , res) => {
    res.status(200).json({api: 'up'})
}) 

// export default server 
module.exports = server;