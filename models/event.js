var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var EventSchema = mongoose.Schema({
	eventName: {
		type: String,
		index:true
    },
	description: {
		type: String
	},poster: {
        type: String
    },eventDate: {
		type: Date
	},mobileNo: {
		type: Number
	},
	emailId: {
		type: String
	},price: {
		type: Number
	}
});

var Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.createEvent = function(newEvent, callback){
	newEvent.save(callback);
}

module.exports.getEventByeventName = function(eventName, callback){
	var query = {eventName: eventName};
	Event.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

