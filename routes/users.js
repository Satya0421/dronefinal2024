var express = require('express');
var router = express.Router();
var usersController = require('../controller/usersController')

/* GET users listing. */

router.get('/', usersController.listUsers);

router.post("/",usersController.createUser);
router.post("/userlogin",usersController.loginUser);
router.post("/userform",usersController.userformController );

module.exports = router;
