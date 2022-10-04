const express = require ('express')
const router = express.Router()

const {setCart,getCart} = require("../controller/cartController")

// router.post('/', setCart)
router.get('/', getCart)



module.exports = router