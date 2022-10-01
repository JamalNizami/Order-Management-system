const express = require ('express')
const router = express.Router()
const {addCartItems, getAllItems,deleteCartItem,updateCartItem} = require("../controller/cartItemController")

router.post('/',addCartItems)
router.get('/',getAllItems)
router.put('/:id',updateCartItem)
router.delete('/:id',deleteCartItem)


module.exports = router