const Users = require('../Models/UserModel');
const Channels = require('../Models/ChannelModel');

module.exports = {
    async indexUser(request,response){

        const filter = request.query;

        const User = await Users.findOne(filter);

        return response.json({
            Name:User.Name,
            SubscribedTo:User.SubscribedTo,
            Country:User.Country
        });

    },
    async indexChannel(request,response){

        const filter = request.query;

        const Channel = await Channels.findOne(filter);

        return response.json({
            Name:Channel.Name,
            Description:Channel.Description,
            Videos:Channel.Videos,
            CommunityPosts:Channel.CommunityPosts,
            isVerified:Channel.isVerified,
            OtherChannels:Channel.OtherChannels,
            Contacts:Channel.Contacts,
            OtherChannels:Channel.OtherChannels,
            Subscribers:Channel.Subscribers
        });

    }
}