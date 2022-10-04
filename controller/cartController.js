const express = require ('express')
const asyncHandler = require('express-async-handler')
const Cart = require('../model/cartModel')

// const setCart = asyncHandler ( async (req,res) => {
//     const cart = await Cart.create(req.body)
//     res.status(200).json(cart)
// })

// Getting Cart of a user 

const getCart = asyncHandler (async (req , res) => {
    const cart = await Cart.find(req.body)
    res.status(200).json({
        Message : "This is your Cart",
        Cart : cart,
    })
})



module.exports = {
    // setCart,
    getCart,
}