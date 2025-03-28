import express from "express";
import restaurantController from "./controllers/restaurant.controll";
const routerAdmin = express.Router();

// Restaurant
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

routerAdmin.get("/", restaurantController.goHome);
// Product

// User

export default routerAdmin;
