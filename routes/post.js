const {postUrl} = require('../controller/post');
var express = require('express');
var router = express.Router();

router.post('/:topic',postUrl);

module.exports = router;