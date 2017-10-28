'use strict';

const express = require('express');
const router = express.Router();
const routes = require('src/lib/loaderUtil').loadModuleDirectory(__dirname);

router.use('/posts', routes.postsRouter);

module.exports = router;