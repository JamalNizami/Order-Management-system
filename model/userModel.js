const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name : {
        type : String ,
        require : true,
    }
  },
  {
    timestraps: true,
  }
  )
  
  
  module.exports = mongoose.model('User', UserSchema);