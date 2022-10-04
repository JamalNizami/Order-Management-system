const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cart_ItemSchema = new Schema({
    product: {
     type: Schema.Types.ObjectId,
     ref : 'Product',
     required : true
    },
    
    cart: {
     type: Schema.Types.ObjectId,
     ref : 'Cart',
     required : true
    },

    quantity: {
     type: Number,
     required : true
    }
  },
  {
    timestraps: true,
  }
  )
  
  
  module.exports = mongoose.model('CartItem', Cart_ItemSchema);