const express = require ('express')
const asyncHandler = require('express-async-handler')
const Product = require("../model/productModel")


        // Adding a Product
const addProduct = asyncHandler( async (req,res) => {
    const product = await Product.create(req.body)
    res.status(200).json({
        Message : "Product Add Successfully" ,
        Data : product
    })
} )

        // Adding a Product
const getProduct = asyncHandler(async (req,res) => {
    const products = await Product.find(req.body)
    res.status(200).json({products})
} )

        // Update Product
const updateProduct = asyncHandler(async (req,res) => {
    const product = await Product.findByIdAndUpdate(req.params.id,
        req.body ,{ 
        new : true
    } )

    res.status(200).json({
        Message : "Product Updated Successfully" ,
        Data : product
    })
})


        // Update Product
const deleteProduct = asyncHandler(async (req,res) => {
    const product = await Product.findByIdAndRemove(req.params.id)

    res.status(200).json({Message : "Product deleted Successfully" ,})
})

module.exports = {
    addProduct,
    getProduct,
    updateProduct,
    deleteProduct
}