const express = require("express")
const router = express.Router()
const {getCategories, newCategory, deleteCategory, saveAttribute} = require("../controllers/categoryController")
const {verifyIsLoggedIn, verifyIsAdmin} = require("../middleware/verifyAuthToken")


router.get("/", getCategories)

router.use(verifyIsLoggedIn)
router.use(verifyIsAdmin)
router.post("/", newCategory)
router.delete("/:category", deleteCategory)
router.post("/attr", saveAttribute)


module.exports = router