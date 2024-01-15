const express = require("express")
const router = express.Router()
const {getCategories, newCategory, deleteCategory, saveAttribute} = require("../controllers/categoryController")

router.get("/", getCategories)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttribute)


module.exports = router