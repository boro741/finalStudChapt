var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var EventSchema = mongoose.Schema({
	eventName: {
		type: String,
		index:true
    },
	desciption: {
		type: String
	},poster: {
        type: String,
    },
	email: {
		type: String
	},
	mobile: {
		type: Number
	}
});

var Event = module.exports = mongoose.model('Event', EventSchema);

module.exports.createEvent = function(newEvent, callback){
	newParticipant.save(callback);
}

module.exports.getEventByeventName = function(eventName, callback){
	var query = {eventName: eventName};
	Event.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

