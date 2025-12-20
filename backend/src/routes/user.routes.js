const Router = require("express").Router();
const { authMiddleware } = require("../middlewares/auth.middleware.js");

Router.use(authMiddleware);

//get me and update me logic
Router.get("/me", () => {});
Router.patch("/me", () => {});
Router.patch("/me/password", () => {});
Router.post("/me/deactivate", () => {});

//saved cafe logic
Router.post("/cafe/:cafeId/save"); //cafe bookmark
Router.delete("/cafe/:cafeId/save"); //remove bookmark cafe
Router.get("/cafe/saved"); //get saved cafes

//cafe review logic
Router.post("/cafe/:cafeId/review", () => {}); //---cafe reviews handlers
Router.post("/cafe/:cafeId/like", () => {}); //----|
Router.post("/reviews/:reviewId/like", () => {}); //like review

module.exports = Router;
