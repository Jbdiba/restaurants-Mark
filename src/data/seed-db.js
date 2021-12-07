import { db, Restaurant, Menu, MenuItem } from "../model/index.js";

const seedRestaurant = [
  {
    name: "Applebees",
    location: "Texas",
    imageLink: "someimage.jpg",
    description: "Fast Food",
  },
  {
    name: "Little Sheep",
    location: "Dallas",
    imageLink: "someimage.jpg",
    description: "Hotpot",
  },
  {
    name: "Spice Grill",
    location: "Houston",
    imageLink: "someimage.jpg",
    description: "Indian",
  },
  {
    name: "Burger King",
    location: "Dallas",
    imageLink: "someimage.jpg",
    description: "Fast Food",
  },
  {
    name: "McDonald's",
    location: "Dallas",
    imageLink: "someimage.jpg",
    description: "Fast Food",
  },
];

const seedMenu = [
  {
    title: "Breakfast",
    menuType: "Breakfast",
    restaurantId: 1,
  },
  {
    title: "Lunch",
    menuType: "Lunch",
    restaurantId: 2,
  },
  {
    title: "Dinner",
    menuType: "Dinner",
    restaurantId: 3,
  },
];

const seedItem = [
  {
    name: "Bhindi Masala",
    imageLink: "someimage.jpg",
    price: 9.5,
    currency: "USD",
    isVegetarian: true,
    menuId: 3,
  },
  {
    name: "Egusi soup",
    imageLink: "someimage.jpg",
    price: 10.5,
    currency: "USD",
    isVegetarian: false,
    menuId: 2,
  },
  {
    name: "Hamburger",
    imageLink: "someimage.jpg",
    price: 6.5,
    currency: "USD",
    isVegetarian: false,
    menuId: 1,
  },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Restaurant.bulkCreate(seedRestaurant, { validate: true });
    await Menu.bulkCreate(seedMenu, { validate: true });
    await MenuItem.bulkCreate(seedItem, { validate: true });
    db.close();
    return "Good";
  } catch (error) {
    return error;
  }
};

export default seed;
