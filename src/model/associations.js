import { db } from "../data/db.js";
import Restaurant from "./restaurant.js";
import Menu from "./menu.js";
import MenuItem from "./menu-item.js";

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

export { db, Restaurant, Menu, MenuItem };
