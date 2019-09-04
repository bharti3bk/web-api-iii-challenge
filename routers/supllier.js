const express = require('express')
const router = express.Router();

router.use(express.json());

router.get('/' , (req,res) => {
    res.send('get to /suppliers')
})  

router.get('/:name' , (req,res) => {
    res.send(`get to /suppliers ${req.params.name}`);

})

module.exports = router;