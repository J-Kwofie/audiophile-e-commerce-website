const express =  require("express");
const {PORT} = require('./config/server.config')
const morgan = require('morgan');
const dateFormat = require('date-format');
const cors = require("cors")
const app = express();

let corsOptins = {
	origin:"http://localhost:3000"
}

// Useful for logging the requests reaching to this server
morgan.token('time', () => dateFormat.asString(dateFormat.ISO8601_FORMAT, new Date())); // Both morgan and log4js are configured to same date format, so that log reading is meaningful and not confusing due to different date formats
app.use(morgan('[:time] :remote-addr :method :url :status :res[content-length] :response-time ms'));


//parse requests of content-type  - application/json
app.use(express.json()); /* bodyParser.json() is deprecated*/
//parse requests of content-type - application/x-www-form-urlencoded*/
app.use(express.urlencoded({extended:true}))

app.use(cors(corsOptins));

app.get("/",(req,res)=>{
	res.json({message:"Welcome to Audiophile system"})
})

require('./routes/category.routes.js')(app)
require('./routes/product.routes.js')(app)

//set port listen request
app.listen(PORT,(err)=>{
	if (err) {
		console.log("Ser encounted Error")
	}
	console.log(`Server is running on port ${PORT}`)
})