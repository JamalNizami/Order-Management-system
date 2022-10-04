const express = require("express")
const connectDB = require("./config/db")
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : false}))

app.use('/api/product', require('./routes/productRoute'))
app.use('/api/cartItem', require('./routes/cartItemRoute'))
app.use('/api/cart', require('./routes/cartRoute'))
app.use('/api/user', require('./routes/userRoute'))

app.listen(port, () => console.log(`Server start on port ${port}`))