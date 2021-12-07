import express from "express";
import restaurantController from "../../controller/api/restaurant.js";

const router = express.Router();

router.get("/", restaurantController.listAll);

const restaurant = router;
export default restaurant;
