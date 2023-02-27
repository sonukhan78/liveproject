const express = require('express');
const router = express.Router();
const { ragisterUser, loginUser, getMe,get } = require('../controllers/userAuthcontroller2');
const {protect}=require('../middleware/Authmiddleware')
router.post('/', ragisterUser);
router.post('/login', loginUser);
router.get('/me',protect, getMe);
router.get('/',get)

module.exports = router;