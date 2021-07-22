const express = require("express");
const router = express.Router();
const multer = require("../middlewares/multer");

const booksController = require("../controllers/bookController");

router.post("/", multer.single("bookImage"), booksController.Create);
router.put("/:id", multer.single("bookImage"), booksController.Update);

// router.post("/", booksController.Create);
router.get("/", booksController.Read);
router.get("/:id", booksController.BookById);
// router.put("/:id", booksController.Update);
router.delete("/:id", booksController.Delete);

module.exports = router;
