const Video = require('../Models/VideoModel');
const { verifyUserOwnsVideo, verifyExistingVideo } = require('../Utils/Video');
const {ObjectId} = require('mongodb');


module.exports = {
    async index(request,response){

        const filter = request.query;

        const Videos = await Video.find(filter);

        return response.json(Videos);
    },
    async store(request,response){

        const {Category,Thumbnail_Url,Video_Url,Video_Title,Video_Description} = request.body;
        const Channel_Id = request.Channel_Id;

        if(!await verifyExistingVideo(Video_Title)) return response.status(400).send("Channel already exists.");
        
        const result = await Video.create({Channel_Id:Channel_Id,Category:Category,Thumbnail_Url:Thumbnail_Url,Video_Url:Video_Url,Video_Title:Video_Title,Video_Description:Video_Description});

        if(result !== null){
            return response.status(200).send("Video sucessfully Created");
        }else{
            return response.status(500).send("Video creation failed, Try again later...")
        }

    },
    async update(request,response){

        const {Video_Id,UpdateColumns} = request.body;
        const Channel_Id = request.Channel_Id;

        const result = await Video.updateOne({_id:ObjectId(Video_Id),Channel_Id:Channel_Id},UpdateColumns);

        if(result.n !== 0){
            return response.status(200).send("Channel data succesfully updated");
        }else{
            return response.status(200).send("No channel data updated")
        }
    },
    async delete(request,response){

        const {Video_Id} = request.body;
        const User_Id = "";

        if(!await verifyUserOwnsVideo(User_Id,Video_Id)) return response.status(401).send("User does not own video!");

        const result = await Video.deleteOne({Video_Id});

        if(result.n !== 0){
            return response.status(200).send("Video succesfully deleted");
        }else{
            return response.status(200).send("Video not found");
        }
    }
}