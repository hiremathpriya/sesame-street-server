const express = require('express')
const JSON = require('json')
const router = express.Router()

// const db = require('../db')
const monsters = [
    {
        id: 1,
         name:"elmo",
         image:"elmo.png"
    },
    {
        id:2,
        name:"cookiemonster",
        image:"cookiemonster.png"
    }
]

router.get('/', function (req, res) {

    console.log('received request for /monsters');
    res.json(monsters);

})

router.get('/:name', function (req, res) {

    const name = req.params.name;
    console.log('received request for /monsters/' + name);

    const monster = monsters.find(monster => {
        if(monster.name === name){
            return monster;
        }
    })

    res.json(monster);

})



module.exports = router