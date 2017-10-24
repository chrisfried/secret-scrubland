var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

router.get('/', function (req, res) {
  res.redirect('https://chrisfried.github.io/secret-scrublandeux/');
});
router.get('/:membershipType/:guardian', function (req, res) {
  res.redirect('https://chrisfried.github.io/secret-scrublandeux/');
});
router.get('/:membershipType/:guardian/fixed', function (req, res) {
  res.redirect('https://chrisfried.github.io/secret-scrublandeux/');
});

module.exports = router;