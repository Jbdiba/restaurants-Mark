import express from "express";
import restaurantController from "../controller/restaurant.js";

const router = express.Router();

router.route("/").get(restaurantController.listAll);
//.post(restaurantController.listAll);

router.route("/:id").get(restaurantController.byId);
//.put(restaurantController.update)
//.delete(restaurantController.remove);

export default router;
