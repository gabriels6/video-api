const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    Name:String,
    User_id:String,
    Description:{type:String,default:'No Description set.'},
    Videos:{type:Array,default:[]},
    Subscribers:{type:Array,default:[]},
    CommunityPosts:{type:Array,default:[]},
    OtherChannels:{type:Array,default:[]},
    Location:{type:String,default:'U.S.'},
    isVerified:{type:Boolean,default:false},
    Contacts:{
        Facebook:{type:String,default:'None'},
        Twitter:{type:String,default:'None'},
        Instagram:{type:String,default:'None'}
    },
    Created_at:{type:Date,default:Date.now()},
    isActive:{type:Boolean,default:true}
});

module.exports = mongoose.model('Channels',ChannelSchema);