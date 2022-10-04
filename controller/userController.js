const express = require ('express')
const asyncHandler = require('express-async-handler')
const Cart = require('../model/cartModel')
const User = require('../model/userModel')

const createUser = asyncHandler ( async (req,res) => {
    const user = await User.create(req.body)
    const cart = await Cart.create(user._id)
    res.status(200).json({
        Message : 'User created ',
        User : user,
        Cart : cart,
    })
})


module.exports = {
    createUser,
}