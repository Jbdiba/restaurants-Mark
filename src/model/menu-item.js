import { db, DataTypes, Model } from "../data/db.js";

class MenuItem extends Model {}

MenuItem.init(
  {
    name: DataTypes.STRING,
    isVegetarian: DataTypes.BOOLEAN,
    price: DataTypes.DECIMAL,
    currency: DataTypes.STRING,
    endDate: DataTypes.DATE,
  },
  {
    sequelize: db,
    modelName: "menuItem",
    tableName: "menu_item",
  }
);

export default MenuItem;
