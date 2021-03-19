const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
    Language:{type:String, default:'English'},
    Country:{type:String,default:'Not chosen'},
    Theme:{type:String, default:'Light'},
    Membership:{type:String,default:'Simple'},
    SubscribedTo:{type:Array,default:[]},
    Notifications:{type:Array,default:[]},
    History:{type:Array,default:[]},
    Created_at:{type:Date,default:Date.now()}
});

module.exports = mongoose.model('Users',UserSchema);