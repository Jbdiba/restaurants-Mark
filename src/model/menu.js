import { db, DataTypes, Model } from "../data/db.js";

class Menu extends Model {}

Menu.init({
  title: DataTypes.STRING,
  menuType: DataTypes.STRING
}, {
  sequelize: db,
  tableName: "menu"
});

export default Menu;