const express = require("express");
const router = express.Router();

const db = require("../../models");
const Todo = db.Todo;

router.get("/", (req, res) => {
  const UserId = req.user.id;
  User.findByPk(UserId)
    .then((user) => {
      if (!user) throw new Error("User not found.");
      return Todo.findAll({
        raw: true,
        nest: true,
        where: { UserId },
      });
    })
    .then((todos) => res.render("index", { todos }))
    .catch((err) => console.log(err));
});

module.exports = router;
