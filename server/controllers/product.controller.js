const Product = require("../dao/product.dao");

exports.getCategory = (req, res)=>{
    Product.getAllProductInACategory(req.params.category,(err,result)=>{
        if(err){
            if(err.kind){
                res.status(404).send({message:`not found category ${req.params.category}`})
            }else{
                res.status(500).send({message:"Error retrieving products in the " +req.params.category})
            }
        }else{
            res.status(200).send(result)
        }
    })
}

exports.productDetails = (req,res)=>{
    Product.getProductDetails(req.params.category, req.params.product_id, (err,result)=>{
        if(err){
            if(err.kind){
                res.status(404).send({message:`not found category ${req.params.category}`})
            }else{
                res.status(500).send({message:"Error retrieving products in the " + req.params.category})
            }
        }else{
            res.status(200).send(result)
        }
    })
}