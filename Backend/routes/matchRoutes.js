
const express = require('express');
const router = express.Router(); 
const Match = require('../models/Match'); 


router.get('/api/matches', async (req, res) => { 
    try {
        const matches = await Match.find({});
        res.json(matches);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});


module.exports = router; 


