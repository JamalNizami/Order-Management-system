const express = require ('express')
const asyncHandler = require('express-async-handler')
const Cart = require('../model/cartModel')

const setCart = asyncHandler ( async (req,res) => {
    const cart = await Cart.create(req.body)
    res.status(200).json(cart)
})


module.exports = {
    setCart,
}