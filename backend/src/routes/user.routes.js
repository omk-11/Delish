const Router = require("express").Router();
const {authMiddleware} = require("../middlewares/auth.middleware.js")

Router.use(authMiddleware);

Router.get('/me',()=>{});
Router.patch('/me/password',()=>{});
Router.patch('/me/name',()=>{});

Router.post('/cafe/:cafeId/save'); //cafe bookmark
Router.delete('/cafe/:cafeId/save'); //delete cafe
Router.get('/cafes/saved'); //get saved cafes
Router.post('/cafe/:cafeId/comment',()=>{});  //---cafe reviews handlers 
Router.post('/cafe/:cafeId/like',()=>{});     //----|


module.exports = Router;