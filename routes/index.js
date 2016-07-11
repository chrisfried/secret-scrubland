var express = require('express');
var router = express.Router();
var request = require('request');
var fs = require('fs');

router.get('/', function (req, res) {
  res.render('index');
});
router.get('/:membershipType/:guardian', function (req, res) {
  res.render('guardian');
});
router.get('/:membershipType/:guardian/fixed', function (req, res) {
  res.render('guardian');
});

router.get('/Platform/*?', function (req, res) {
  res.setTimeout(25000);
  var options = {
    url: 'https://www.bungie.net/' + req.originalUrl,
    headers: {'X-API-Key': process.env.BUNGIE_KEY}
  };
  try {
    request(options, function (error, response, body) {
      if (!error) {
        res.send(body);
      } else {
        res.send(error);
      }
    });
  } catch (e) {}
});

module.exports = router;