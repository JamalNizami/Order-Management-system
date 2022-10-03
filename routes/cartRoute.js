const express = require ('express')
const router = express.Router()

const {setCart,} = require("../controller/cartController")

router.post('/', setCart,)



module.exports = router