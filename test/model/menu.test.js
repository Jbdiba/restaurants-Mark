import { db } from "../../src/data/db.js";
import Menu from "../../src/model/menu.js";

describe('Menu', () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  test('can create a menu', async () => {
    const menu = await Menu.create({ title: 'Breakfast' })
    expect(menu.id).toBe(1)
  });
});