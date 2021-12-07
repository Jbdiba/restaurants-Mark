import {
  db,
  Restaurant,
  Menu,
  MenuItem,
} from "../../src/model/associations.js";

// test musician database CRUD
describe("Associations", () => {
  const testData = {
    restauraunt: {
      bk: {
        name: "Burger King",
        imageLink: "image.url",
        description: "Best restaurant",
      },
      mc: {
        name: "McDonald's",
        imageLink: "image.url",
        description: "Better restaurant",
      },
    },
    menu: {
      bkMenuBreakfast: {
        title: "Burger King Breakfast Menu",
        type: "Breakfast",
      },
      bkMenuHamburger: {
        title: "Burger King Hamburger Menu",
        type: "Hamburger",
      },
      bkMenuSides: { title: "Burger King Sides Menu", type: "Sides" },
      bkMenuDrinks: { title: "Burger King Drinks Menu", type: "Drinks" },
      mcMenuBreakfast: {
        title: "McDonald's Breakfast Menu",
        type: "Breakfast",
      },
      mcMenuHamburger: {
        title: "McDonald's Hamburger Menu",
        type: "Hamburger",
      },
      mcMenuSides: { title: "McDonald's Sides Menu", type: "Sides" },
      mcMenuDrinks: { title: "McDonald's Drinks Menu", type: "Drinks" },
    },
    menuItem: {
      whopper: { name: "Whopper", price: 2.4, currency: "USD" },
      dblWhopper: { name: "Double Whopper", price: 3.4, currency: "USD" },
      hamburger: { name: "Hamburger", price: 1.2, currency: "USD" },
      cheeseburger: { name: "Hamburger", price: 1.6, currency: "USD" },
      bigMac: { name: "Big Mac", price: 3.75, currency: "USD" },
      bkFrenchFries: { name: "French Fries", price: 2.1, currency: "USD" },
      mcFrenchFries: { name: "French Fries", price: 1.99, currency: "USD" },
    },
  };

  beforeEach(async () => {
    await db.sync({ force: true });
    // const burgerKing = await Restaurant.create(testData.restauraunt.bk);
    // const mcdonalds = await Restaurant.create(testData.restauraunt.mc);

    // const bkMenuHamburger = await Menu.create(testData.menu.bkMenuHamburger);
    // const mcMenuHamburger = await Menu.create(testData.menu.mcMenuHamburger);
    // burgerKing.addMenu(bkMenuHamburger);
    // mcdonalds.addMenu(mcMenuHamburger);

    // const whopper = await MenuItem.create(testData.menuItem.whopper);
    // const dblWhopper = await MenuItem.create(testData.menuItem.dblWhopper);
    // bkMenuHamburger.addMenuItems([whopper, dblWhopper]);
  });

  afterAll(async () => {
    await db.sync({ force: true });
  });

  test("can create a restaurant", async () => {
    const burgerKing = await Restaurant.create(testData.restauraunt.bk);
    expect(burgerKing instanceof Restaurant).toBe(true);
  });

  test("can create a menu", async () => {
    const bkMenuHamburger = await Menu.create(testData.menu.bkMenuHamburger);
    expect(bkMenuHamburger instanceof Menu).toBe(true);
  });

  test("can create a menu item", async () => {
    const whopper = await MenuItem.create(testData.menuItem.whopper);
    expect(whopper instanceof MenuItem).toBe(true);
  });

  test("can add a menu to a restaurant", async () => {
    const burgerKing = await Restaurant.create(testData.restauraunt.bk);
    const bkMenuHamburger = await Menu.create(testData.menu.bkMenuHamburger);
    await burgerKing.addMenu(bkMenuHamburger);
    const bkMenus = await burgerKing.getMenus();
    expect(bkMenus.length).toBe(1);
    expect(bkMenus[0] instanceof Menu).toBe(true);
    expect(bkMenus[0].title).toBe(testData.menu.bkMenuHamburger.title);
  });

  test("can add a menu item to a menu", async () => {
    const burgerKing = await Restaurant.create(testData.restauraunt.bk);
    const bkMenuHamburger = await Menu.create(testData.menu.bkMenuHamburger);
    const whopper = await MenuItem.create(testData.menuItem.whopper);
    await burgerKing.addMenu(bkMenuHamburger);
    await bkMenuHamburger.addMenuItem(whopper);
    const bkMenuItems = await bkMenuHamburger.getMenuItems();
    expect(bkMenuItems.length).toBe(1);
    expect(bkMenuItems[0] instanceof MenuItem).toBe(true);
    expect(bkMenuItems[0].name).toBe(testData.menuItem.whopper.name);
  });
});
