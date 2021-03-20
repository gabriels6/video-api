const { Router } = require('express');
const AuthenticationController = require('../Controllers/AuthenticationController');
const {verifyJWT} = require('../Utils/JWT/JWTVerify');
const UserController = require('../Controllers/UserController');
const ChannelController = require('../Controllers/ChannelController');
const VideoController = require('../Controllers/VideoController');
const PublicSearchController = require('../Controllers/PublicSearchController');
const routes = Router();



//Authentication routes
routes.post('/login',AuthenticationController.login);
routes.post('/logout',AuthenticationController.logout);

//User routes
routes.get('/User/public',PublicSearchController.indexChannel);
routes.get('/User',verifyJWT,UserController.index);
routes.post('/User',UserController.store);
routes.put('/User',verifyJWT,UserController.update);


//Channel routes
routes.get('/Channel/public',PublicSearchController.indexChannel);
routes.get('/Channel',verifyJWT,ChannelController.index);
routes.post('/Channel',verifyJWT,ChannelController.store);
routes.put('/Channel',verifyJWT,ChannelController.update);

//Video routes
routes.get('/Video',VideoController.index);
routes.post('/Video',verifyJWT,VideoController.store);
routes.put('/Video',verifyJWT,VideoController.update);

module.exports = routes;