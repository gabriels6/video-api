const Channel = require('../Models/ChannelModel');
const isNull = require('./Object/isNull');

module.exports = {
    async verifyExistingChannel(Name){

        const ExistingChannel = await Channel.findOne({Name:Name});

        return isNull(ExistingChannel);
    }
}