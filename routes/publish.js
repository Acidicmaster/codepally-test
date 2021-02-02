const {postMessage} = require('../controller/post');
var express = require('express');
var router = express.Router();

router.post('/:topic',postMessage);

module.exports = router;