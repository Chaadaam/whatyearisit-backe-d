var express = require("express");
var router = express.Router();

// création de ma route.
router.get("/year", function (req, res) {
  const year = new Date().getFullYear().toString();
  res.json({ year: year});
});

module.exports = router;
