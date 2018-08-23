var Product = require('../models/product');
// let product =require('mongoose').model("Product")

class ProductController{
    findAll(req, res){
        var data=Product.find({}, function(err, data){
            if (err){
                console("errors")
                return res.json(err);
            } else{
                return res.json(data);
            }
        })
    }
    addProduct(req, res){
        var product= new Product(req.body);
        console.log(product)
        product.save(function(err){
            if (err){
                return res.json(err);
            } else{
                return res.json(product);
            }
        })
    }
    findOne(req, res){
        Product.findOne({_id:req.params.id}, function(err, product){
            if (err){
                return res.json(err);
            } else{
                return res.json( product);
            }
        })

    }
    update(req, res){
        Product.findOne({_id:req.params.id}, function(err, product){
            if (!product){
                return res.json(err)
            }else{
                product.name=req.body.name || product.name;
                product.qty=req.body.qty || product.qty;
                product.price=req.body.price || product.price;
                product.save(err=>{
                    if(err){
                        return res.json(err)
                    } else {
                        return res.json(product)
                    }
                }
                )
            }

        })
    }
    deleteOne(req, res){
        // Product.findByIdAndRemove({_id:req.params.id}
     
        Product.findOneAndRemove(req.params.id, function(err, product){
            if (err){
                return res.json(err);
            } else{
                return res.json(product);
            }
        })
    }

}

module.exports=new ProductController()