import pkg from "sequelize";

const { Sequelize, DataTypes, Model } = pkg;

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./src/data/database.sqlite",
  logging: false,
  define: {
    underscored: true,
    underscoredAll: true,
    freezeTableName: true,
    timestamps: true,
  },
});

export { db, DataTypes, Model };
