const Users = require('../Models/UserModel');
const Channel = require('../Models/ChannelModel');
const {verifyUserNull} = require('../Utils/User');
const {verifyJWT} = require('../Utils/JWT/JWTVerify');
const {signToken} = require('../Utils/JWT/JWTCreate');

module.exports = {
    async login(request,response){

        const {Email,Password} = request.body;

        const User = await Users.findOne({Email:Email,Password:Password});

        if(User === null) return response.status(400).send("User not found!");

        const User_Channel = await Channel.findOne({User_id:User._id});

       const token = signToken(User._id,User_Channel._id);

       return response.json({auth:true,token: token});
    },
    async logout(request,response){

        return response.json({auth:false, token: null});

    }
}