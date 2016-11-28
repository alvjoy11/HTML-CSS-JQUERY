var mongoose = require("mongoose");

var RabbitSchema = new mongoose.Schema({
	name: {type: String, required: true, minlength: 1},
	fave_food: {type: String, required: true},
	location: [{type: String, required: true}]
}, {timestamps: true});

var Rabbit = mongoose.model("Rabbit", RabbitSchema);
