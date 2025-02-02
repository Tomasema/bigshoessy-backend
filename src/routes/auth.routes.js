const { Router } = require("express");
const router = Router();
const { logIn, register, logOut, changePassword } = require('../controllers/auth.controller');
const { EmailIsUnique } = require('../middlewares/EmailIsUnique');
const { validateChangePassword, validateLogin, validateRegister } = require('../validators/auth');

router.post('/register', validateRegister, EmailIsUnique, register) // http://localhost:3000/api/register

router.post('/login', validateLogin, logIn) // http://localhost:3000/api/login

router.get('/logout', logOut) // http://localhost:3000/api/logout

router.post('/change-password', validateChangePassword, changePassword) // http://localhost:3000/api/change-password

module.exports = router;