const Video = require('../Models/VideoModel');
const isNull = require('./Object/isNull');

module.exports = {
    async verifyExistingVideo(Name){

        const ExistingVideo = await Video.findOne({Name:Name});

        return isNull(ExistingVideo);
    },
    async verifyUserOwnsVideo(User_id,Video_Name){

        const ExistingVideo = await Video.findOne({User_id:User_id,Name:Video_Name});

        return !isNull(ExistingVideo);
    }
}