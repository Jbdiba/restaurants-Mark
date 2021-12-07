import { db } from "../../src/data/db.js";
import MenuItem from "../../src/model/menu-item.js";
import seed from "../../src/data/seed-db.js";

describe("MenuItem", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  afterAll(async () => {
    await seed();
  });

  test("can create a menu item", async () => {
    const menuItem = await MenuItem.create({
      name: "Whopper",
      price: 3.15,
      currency: "USD",
    });
    expect(menuItem.id).toBe(1);
  });
});
