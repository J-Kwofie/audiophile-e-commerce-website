
module.exports = (app)=>{
	const product = require('../controllers/product.controller.js')
	
	const router = require('express').Router();
	router.get("/:category", product.getCategory)
	router.get("/:category/:product_id", product.productDetails)

	app.use("/api/vi/product", router)
}