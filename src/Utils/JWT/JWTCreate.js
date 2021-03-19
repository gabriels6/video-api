const jwt = require('jsonwebtoken');

module.exports = {
    signToken(UserId,Channel_Id = ""){

        const token = jwt.sign({id:UserId,channel_id:Channel_Id},process.env.SECRET, {
            expiresIn: "24h"
        });

        return token;
    }
}