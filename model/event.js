var mongoose 	= require('mongoose');
var Schema		= mongoose.Schema;

var EventSchema = new Schema({
	name: String,
	description: String,
	logo: String
});

module.exports = mongoose.model('Event', EventSchema);
