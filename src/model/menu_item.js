import { db, DataTypes, Model } from "../data/db.js";

class MenuItem extends Model {}

MenuItem.init({
  name: DataTypes.STRING,
  price: DataTypes.DECIMAL,
  currency: DataTypes.STRING,
  endDate: DataTypes.DATE,
}, {
  sequelize: db,
  tableName: "menu_item"
});

export default MenuItem;