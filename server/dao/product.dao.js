const db = require('./db');

const Product = function(product){
	this.name = product.name;
	this.description = product.description;
	this.imageURL  = product.imageURL
}

Product.getAllProductInACategory = (categoryName, result) =>{
	const queryText =`SELECT slug, price, product_id, new, p.name, description, category_mobile_image_url, category_tablet_image_url, category_desktop_image_url  FROM category c, product p WHERE c.category_id = p.category_id AND c.name ='${categoryName}' ORDER BY new DESC , name DESC `;
	db.query(queryText,(err,queryResult)=>{
		if(err){
			console.log(err);
			result(err)
			return
		}
		if(queryResult.rowCount==0){
			result({kind:"not found"}, null)
			return
		}
		result(null,queryResult.rows)
	})
	

}

Product.getProductDetails = (category,product_id,result)=>{
	console.log(product_id);
	const queryText =`SELECT slug, price, product_id, new, name, description, feature, mobile_image_url, tablet_image_url, desktop_image_url  FROM product WHERE slug='${product_id}'`;

	const queryText1= `SELECT item_name, quantity from other_items_added_to_product  o , product p  where p.category_id=o.category_id AND p.slug='${product_id}'`


	

	db.query(queryText,(err,queryResult)=>{
		if(err){
			console.log("err1")
			console.log(err);
			result(err)
			return
		}
		if(queryResult.rowCount==0){
			console.log("err2")
			result({kind:"not found"}, null)
			return
		}
		db.query(queryText1,(err,queryResult1)=>{
			if(err){
				console.log(err);
				result(err)
				return
			}
			if(queryResult1.rowCount==0){
				result({kind:"not found"}, null)
				return
			}
			const productId = queryResult.rows[0].product_id;
			const queryText2 =`SELECT  mobile_image_url, tablet_image_url, desktop_image_url  FROM product_gallery p WHERE product_id='${productId}'`;
			db.query(queryText2,(err,queryResult2)=>{
				if(err){
					console.log("err3")
					console.log(err);
					result(err)
					return
				}
				if(queryResult2.rowCount==0){
					result({kind:"not found"}, null)
					return
				}
				const queryText3 =`SELECT p.product_id, p.slug, o.product_id, o.category_mobile_image_url, o.category_tablet_image_url, o.category_desktop_image_url ,o.name  from product p, other_product  o WHERE o.product_id='${productId}' AND p.slug=o.slug`;
				db.query(queryText3,(err,queryResult3)=>{
					if(err){
						console.log("err4")
						console.log(err);
						result(err)
						return
					}
					if(queryResult3.rowCount==0){
						result({kind:"not found"}, null)
						return
					}
				result(null,[...queryResult.rows, queryResult1.rows, queryResult2.rows, queryResult3.rows])
				})
			})
			
		})
	})
	
}
module.exports = Product;