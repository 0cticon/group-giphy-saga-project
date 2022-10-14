const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();
const axios = require('axios');

// ROUTER GET
router.get('/:tag', (req, res) => {
    const tag = req.params.tag
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${tag}&limit=25&offset=0&rating=g&lang=en`)
    .then((response) => {
        console.log(response);
        res.send(response.data);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;