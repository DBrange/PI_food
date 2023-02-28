const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const RecipeModel = require("./models/Recipe.model");
const DietModel = require("./models/Diet.model");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,
  {
    logging: false,
    native: false,
  }
);

RecipeModel(sequelize);
DietModel(sequelize);

const { Recipe, Diet } = sequelize.models;

Recipe.belongsToMany(Diet, { through: "RecipeDiet" });
Diet.belongsToMany(Recipe, { through: "RecipeDiet" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
