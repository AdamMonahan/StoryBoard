const express = require('express')
const router = express.Router();

// Login/Langing Page
//@route GET /
router.get('/', (req, res) => {
    res.render('login')
})

// Dashboard
//@route GET /
router.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

module.exports = router