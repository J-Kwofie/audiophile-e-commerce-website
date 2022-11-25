const db = require('./db');

const Category = function(category){
	name=category.name;
}

Category.getAll = (result)=>{
	const queryText = "SELECT name,image FROM category";
	db.query(queryText,(err,databaseResponse)=>{
		if(err){
			result(err);
			return;
		}
		result(null,databaseResponse.rows)
	})

}
module.exports = Category;