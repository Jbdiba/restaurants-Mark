import { db } from "../data/db.js";
import Restaurant from "./restaurant";
import Menu from "./menu";
import MenuItem from "./menu_item";

MenuItem.belongsTo(Menu);
Menu.hasMany(MenuItem);

Menu.belongsTo(Restaurant);
Restaurant.hasMany(Menu);

export { db, Restaurant, Menu, MenuItem };
