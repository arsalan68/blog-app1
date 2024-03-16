const express = require('express')
// hamara 2 tarminal chalta h to crash ho jata h isliye ham apne backend ke tarminal me npm i cors instal krte h 
const cors = require('cors')
const app = express()
const port = 8080;
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

let dataBase = require('./db')

dataBase()
// ye line likhne per he ham postman pe data bhej sakte h 
app.use(express.json({limit:'50mb'}))
app.use(cors())

app.get('/', (req, res) => {
    res.send("welcome")
    
})

// yha pe ham postman pe pahle localhost fir user likhna pasdega fir apna routes ka naam jaise create,login wagera
app.use('/user', userRoutes)
app.use('/post', postRoutes)


app.listen(port, () => {
    console.log(`server is running on port ${port} http://localhost:8080/`)
})

