const { Router } = require("express");
const {Diet} = require("../db");
const {getDiets} = require('../controllers/diets.controllers')

const router = new Router();

router.post('/', async (req, res) => {
  const { name } = req.body
  try {
    const createDiet = await postDiet(name)
    res.status(201).json(createDiet)
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
})

router.get('/', async (req, res) => {
  
  try {
    const allDiets = await getDiets();

    res.status(200).json(allDiets)
  } catch (err) {
    res.status(404).json({error: err.message})
  }
})

module.exports = router;
