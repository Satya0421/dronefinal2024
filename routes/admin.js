const express =require("express");
const router  = express.Router();
const adminController  = require("../controller/adminController");

router.post("/",adminController.createUser);
router.post("/login",adminController.loginUser);

module.exports = router;