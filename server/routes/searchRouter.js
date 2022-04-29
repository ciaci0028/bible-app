require('dotenv').config()
const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
    console.log('searched params are', req.body)
    // axios({
    //     method: 'GET',
    //     url: 'https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/search',
    //     params: {
    //         api_key: process.env.BIBLE_API_KEY,
    //         tag: req.body
    //     }
    // })
})

module.exports = router;
