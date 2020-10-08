const express = require('express');
const router = express.Router();

const controller = require('../controllers');

router.get('/posts',controller.getPosts)

module.exports = router;