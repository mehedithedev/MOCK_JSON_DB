const express = require('express')
const router = express.Router()

// Render the home page
router.get('/', (req, res) => {
    res.render('home')
})

// Handle adding a new user
router.post('/users', (req, res) => {
    // Add user logic here
    res.send('User added')
})

// Handle updating a user
router.post('/users/:id/update', (req, res) => {
    const userId = req.params.id
    // Update user logic here
    res.send(`User ${userId} updated`)
})

// Handle deleting a user
router.post('/users/:id/delete', (req, res) => {
    const userId = req.params.id
    // Delete user logic here
    res.send(`User ${userId} deleted`)
})

module.exports = router