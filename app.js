const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))


app.listen(PORT, ()=>{
    console.log('Connected to' + PORT)
})