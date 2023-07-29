const express = require("express");
const router = express.Router();

const db = require("../../models");
const Todo = db.Todo;

router.get("/:id", (req, res) => {
  const UserId = req.user.id;
  const id = req.params.id;
  return Todo.findOne({
    where: { id, UserId }
  })
      // 資料轉換成plain object 只需要在傳入樣板前加上toJSON()
      .then((todo) => res.render("detail", { todo: todo.toJSON() }))
      .catch((err) => console.log(err));
  
});

module.exports = router;
