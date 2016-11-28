var mongoose = require("mongoose");
var Rabbit = mongoose.model("Rabbit");

module.exports = {
	show: function(request, response) {
		Rabbit.find({ }, function(errors, rabbits){
			console.log(rabbits);
			response.render("index", {rabbits: rabbits});
		})
	},
	create: function(request, response) {
	 console.log("POST DATA", request.body);
	 var rabbit = new Rabbit(request.body);
	 rabbit.save(function(errors){ // .save is the method that inserts into db.
		 if(errors) {
			 console.log("Oops! Something went wrong!");
		 } else { // else console.log tha we did well & redirect to "/"
			 console.log("Success! Rabbit added!");
			 response.redirect("/");
		 }
	 })
 },
	showOne: function(request, response) {
		Rabbit.findOne({_id: request.params.id }, function(errors, rabbits) {
		response.render("edit", {rabbits: rabbits})
		})
	},
	update: function(request,response){
		console.log(request.body);
		Rabbit.findOne({_id: request.params.id}, function(errors, rabbits){
			if(errors){
				console.log("Didn't update!");
			} else{
				rabbits.name = request.body.name;
				rabbits.fave_food = request.body.fave_food;
				rabbits.location = request.body.location;
				rabbits.save(function(errors) {
					if(errors){
						console.log("Nope.");
					} else {
						response.redirect("/rabbits/" + rabbits.id);
					}
				})
			}
		})
	},
	remove: function(request,response){
		Rabbit.remove({_id: request.params.id}, function(errors){
			if(errors){
				console.log("Didn't delete rabbit!");
			} else{
				response.redirect("/");
			}
		})
	}
}
