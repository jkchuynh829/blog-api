'use strict';

/**
 * Add CORS configuration headers to response
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */

module.exports = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'localhost:8080');
  res.setHeader('Access-Control-Allow-Headers', 'x-requested-with, authorization, content-type');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, HEAD');
  next();
};
