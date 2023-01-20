var express = require("express");
var router = express.Router();

// création de ma route.
router.get("/year", function (req, res) {
  const year = Date.now();
  res.json({ now: year });
});

module.exports = router;
