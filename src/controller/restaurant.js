import { Restaurant } from "../model/index.js";

const controller = {
  async listAll(req, res) {
    const restaurants = await Restaurant.findAll();
    res.render("restaurants", { restaurants });
  },

  async byId(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id, {
      include: { all: true, nested: true },
    });
    res.render("restaurant", { restaurant });
  },

  async create(req, res) {
    const restaurant = await Restaurant.create(req.body);
    res.json(restaurant);
  },

  async update(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id);
    // TODO: update model
    res.json(restaurant);
  },

  async remove(req, res) {
    const restaurant = await Restaurant.findByPk(req.params.id);
    await restaurant.destroy();
    res.json(req.params.id);
  },
};

export default controller;
