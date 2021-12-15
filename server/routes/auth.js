const express = require('express')
const router = express.Router();

const {signup,login} = require ('../controllers/auth.js')

const router = express.Router()

router.post('/signup');
router.post('/login');

module.exports = router;