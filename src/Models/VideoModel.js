const mongoose = require('mongoose');

const VideoModel = mongoose.Schema({
    Channel_Id:String,
    Category:String,
    Thumbnail_Url:String,
    Video_Url:String,
    Video_Title:String,
    Video_Description:String,
    Likes:{type:Array,default:[]},
    Dislikes:{type:Array,default:[]},
    Comments:{type:Array,default:[]},
    Views:{type:Array,default:[]},
    isPrivate:{type:Boolean,default:true},
    Created_at:{type:Date,default:Date.now()},
    isActive:{type:Boolean,default:true}
});

module.exports = mongoose.model('Videos',VideoModel);