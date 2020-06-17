const mongoose = require('mongoose');

const schema = mongoose.Schema;

const itemSchema = new schema ({
    item:{
        type:String,
        required:true
       
    }

});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;