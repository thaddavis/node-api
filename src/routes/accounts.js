const { Tank } = require('../db/models/Tank')

const {
  generateAccessToken
} = require('../utils')
const router = require('express').Router()

router.route('/')
    .post(function (req, res) {
        // create account data
        console.log(req.body)

        const token = generateAccessToken({ email: req.body.email });
        res.json(token);
    })
  
router.route('/:id')
    .get(function (req, res) {
        // get and send tank data
        res.send('get tank data')
    });

module.exports = router;