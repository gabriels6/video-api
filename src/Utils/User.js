const User = require('../Models/UserModel');
const isNull = require('./Object/isNull');


module.exports = {
    async verifyUserNull(Username){

        const ExistingUser = await User.findOne({Name:Username});
        
        return isNull(ExistingUser);
    }
}