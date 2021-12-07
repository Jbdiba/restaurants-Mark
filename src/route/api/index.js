import express from "express";
import restaurant from "./restaurant.js";

const router = express.Router();

router.get("/now", (request, response) => {
  const date = new Date();
  response.send(date);
});

router.use("/restaurant", restaurant);

export default router;
