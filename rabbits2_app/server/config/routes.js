var rabbits = require("../controllers/rabbits.js");

module.exports = function(app) {

	app.get('/', function(request, response){
		rabbits.show(request, response)
	})

	app.post('/rabbits', function(request, response){
		rabbits.create(request, response)
	})

	app.get('/rabbits/:id', function(request, response){
		rabbits.showOne(request, response)
	})

	app.post("/rabbits/:id", function(request,response){
		rabbits.update(request, response)
	})

	app.post("/rabbits/:id/remove", function(request,response){
		rabbits.remove(request, response)
	})
}
