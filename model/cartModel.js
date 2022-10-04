const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CartSchema = new Schema({
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        require : true
    }
  },
  {
    timestraps: true,
  }
  )
  
  
  module.exports = mongoose.model('Cart', CartSchema);