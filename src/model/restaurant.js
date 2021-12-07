import { db, DataTypes, Model } from "../data/db.js";

class Restaurant extends Model {}

Restaurant.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    imageLink: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "restaurant",
  }
);

export default Restaurant;
