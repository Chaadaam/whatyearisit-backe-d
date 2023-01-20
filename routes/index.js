var express = require('express');
var router = express.Router();

// création de ma route.
router.get('/year', function(req, res, next) {
  const year = date;
  res.json({ now: year });
});

module.exports = router;
