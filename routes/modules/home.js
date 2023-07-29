const express = require("express");
const router = express.Router();

const db = require("../../models");
const Todo = db.Todo;

router.get("/", (req, res) => {
  return Todo.findAll({
    raw: true,
    nest: true,
  })
    .then((todos) => res.render("index", { todos }))
    .catch((err) => console.log(err));
});

module.exports = router;