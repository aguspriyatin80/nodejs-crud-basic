const express = require("express");
const router = express.Router();

const booksController = require("../controllers/bookController");

router.post("/", booksController.Create);
router.get("/", booksController.Read);
router.get("/:id", booksController.BookById);
router.put("/:id", booksController.Update);
router.delete("/:id", booksController.Delete);

module.exports = router;
