var mongoose= require('mongoose');


var ProductSchema= new mongoose.Schema({
    name: {type: String, required: [true, 'Products must contain a Name'], minlength:[3, "Product names must contain at least Three Characters"]},
    qty: {type:Number, default:0, min:[0, "Must be Greater than 0"], required:[true, 'Products must contain a Qty']},
    price:{type:Number, default:1, min:[1, "Must be Greater than $1"], required:[true, 'Products must contain a Price']}
}, {timestamps:true});

var product=mongoose.model('Product', ProductSchema);
module.exports= product;