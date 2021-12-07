import { Restaurant } from "../../model/index.js";

const restaurantController = {
  async listAll(request, response) {
    const restaurants = await Restaurant.findAll();
    response.json(restaurants);
  },
};

export default restaurantController;
