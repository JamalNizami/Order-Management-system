const express = require ('express')
const asyncHandler = require('express-async-handler')
const CartItem = require("../model/cartItemModel")
const Cart = require('../model/cartModel')

const addCartItems = asyncHandler(async (req, res) => {

    // const product = await Product.find(Product._id)
    
    const cartItem = await CartItem.create(req.body)
    Cart.

    res.status(200).json({
        Message : "Items added to cart Successfully" , 
        Data : cartItem,
    })
}) 

// getting all the cart items 
const getAllItems = asyncHandler(async (req, res) =>{
    const cartItems = await CartItem.find(req.body)

    res.status(200).json({cartItems})
} )

// update cart CartItem 
const updateCartItem = asyncHandler (async (req , res) => {
    const cartItem = await CartItem.findByIdAndUpdate(req.params.id , req.body , {
        new :true
    })

    res.status(200).json({
        Message : "Porduct Item is Updated",
        Data : cartItem
    })
} )


// Deleting the cartItem 
const deleteCartItem = asyncHandler (async (req , res) => {
    const cartItem = await CartItem.findByIdAndRemove(req.params.id)

    res.status(200).json({
        Message : "Porduct Item is Deleted",
    })
} )


module.exports = {
    addCartItems,
    getAllItems,
    deleteCartItem,
    updateCartItem
}