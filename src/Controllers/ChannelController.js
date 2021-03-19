const Channel = require('../Models/ChannelModel');
const {ObjectId} = require('mongodb');

module.exports = {
    async index(request,response){

        const filter = request.query;

        const Channels = await Channel.find(filter);

        return response.json(Channels);
    },
    async store(request,response){

        const {Name} = request.body;
        const User_id = request.User_Id;

        const result = Channel.create({Name:Name,User_id:User_id});

        if(result !== null) return response.status(200).send("Channel sucessfully Created");
    },
    async update(request,response){

        const {UpdateColumns} = request.body;
        const User_id = request.User_Id;

        const result = await Channel.updateOne({User_id:User_id},UpdateColumns);
        
        if(result.n !== 0){
            return response.status(200).send("User data succesfully updated");
        }else{
            return response.status(200).send("No user data updated")
        }
    }
}