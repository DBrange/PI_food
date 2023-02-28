const { Router } = require("express");
const recipes = require("./recipes.route");
const diets = require("./diets.route");

const router = new Router();

router.use("/recipes", recipes);
router.use("/diets", diets);

module.exports = router;
