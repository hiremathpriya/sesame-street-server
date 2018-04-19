const express = require('express')
const JSON = require('json')
const router = express.Router()

router.get('/', function (req, res) {

    console.log('received request for /project');
    res.send('Welcome to my cookie monster api !!!');

})

module.exports = router