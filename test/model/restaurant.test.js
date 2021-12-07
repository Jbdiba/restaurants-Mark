import { db } from "../../src/data/db.js";
import Restaurant from "../../src/model/restaurant.js";
import seed from "../../src/data/seed-db.js";

describe("Restaurant", () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  afterAll(async () => {
    await seed();
  });

  test("can create a restaurant", async () => {
    const restaurant = await Restaurant.create({
      name: "Ronalds",
      image: "http://some.image.url",
      description: "A good restaurant",
    });
    expect(restaurant.id).toBe(1);
  });
});
