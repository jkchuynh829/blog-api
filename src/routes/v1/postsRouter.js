'use strict';

const router = require('express').Router();
const { postService } = require('../../services');

router.get('/', postService.test);

module.exports = router;