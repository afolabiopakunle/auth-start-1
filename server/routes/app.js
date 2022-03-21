const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('API homepage works')
})

module.exports = router;
