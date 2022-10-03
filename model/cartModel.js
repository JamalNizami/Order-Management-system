const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    cartItem: [{
     type: Schema.Types.ObjectId,
     ref : 'CartItem',
     required : true
    }],

    totalNoOfItem: {
     type: Number,
    },

    totalPrice: {
     type: Number,
    },

  },
  {
    timestraps: true,
  }
  )
  
  
  module.exports = mongoose.model('Cart', CartSchema);