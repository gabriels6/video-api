const { update } = require('../Models/UserModel');
const { verifyUserNull } = require('../Utils/User');
const User = require('../Models/UserModel');

module.exports = {
    async index(request,response){
        const filter = request.query;

        const Users = await User.find(filter);

        return response.json(Users);
    },
    async store(request,response){

        const {Name,Email,Password} = request.body;

        if(!verifyUserNull(Name)) return response.status(400).send("User already exists.");
        
        const result = await User.create({Name:Name,Email:Email,Password:Password});

        if(result !== null) return response.status(200).send("User sucessfully Created");        
    },
    async update(request,response){

        const {UpdateColumns} = request.body;
        const User_id = request.User_Id;

        const result = await User.updateOne({_id:User_id},UpdateColumns);

        if(result.n !== 0){
            return response.status(200).send("User data succesfully updated");
        }else{
            return response.status(200).send("No user data updated")
        }
    },
}