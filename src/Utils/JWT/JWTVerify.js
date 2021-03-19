const jwt = require('jsonwebtoken');

module.exports = {
    async verifyJWT(request,response,next){
        const token = request.headers['user-access-token'];

        if(!token) return response.status(401).json({auth:false,message: 'No token provided'});

        jwt.verify(token,process.env.SECRET,function(err,decoded){
            if(err) return response.status(500).json({auth:false,message:'Failed to authenticate'});

            request.User_Id = decoded.id;
            request.Channel_Id = decoded.channel_id;
            next();
        });
    }
}