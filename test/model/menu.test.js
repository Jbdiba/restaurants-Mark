import { db } from "../../src/data/db.js";
import Menu from "../../src/model/menu.js";
import seed from "../../src/data/seed-db.js";

describe("Menu", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  afterAll(async () => {
    await seed();
  });

  test("can create a menu", async () => {
    const menu = await Menu.create({ title: "Breakfast" });
    expect(menu.id).toBe(1);
  });
});
