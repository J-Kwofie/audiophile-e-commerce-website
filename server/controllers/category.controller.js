const Category = require('../dao/category.dao')

exports.findAll  = (req,res)=>{
	Category.getAll((err , data)=>{
		if(err){
			res.status(500).send({
				message: err.message || "some error occured while retriving a Categories"
			})
		}else{
			res.status(200).send({"STATUS":"OK", data:data})
		}
	})
}

