import { db, DataTypes, Model } from "../data/db.js";

class Restaurant extends Model {}

Restaurant.init({
  name: DataTypes.STRING,
  imageLink: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize: db,
  tableName: "restaurant"
});

export default Restaurant;