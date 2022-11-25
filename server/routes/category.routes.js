module.exports = (app)=>{
	const category = require('../controllers/category.controller.js')
	
	const router = require('express').Router();
	router.get("/", category.findAll)

	app.use("/api/vi/category", router)
}