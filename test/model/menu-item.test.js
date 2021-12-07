import { db } from "../../src/data/db.js";
import MenuItem from "../../src/model/menu_item";

describe('MenuItem', () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  test('can create a menu item', async () => {
    const menuItem = await MenuItem.create({ name: 'Whopper', price: 3.15, currency: "USD" })
    expect(menuItem.id).toBe(1)
  });
});