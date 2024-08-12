const express = require('express')
const userRoute = require('./routes/users.js')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public')) // This line serves static files from the 'public' directory
app.use(express.urlencoded({ extended: true })) // Add this line to parse URL-encoded bodies
app.use(express.json()) // Add this line to parse JSON bodies
app.use(userRoute);

app.listen(PORT, () => {
    console.log('Connected to ' + PORT)
})