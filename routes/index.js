var express = require("express");
var router = express.Router();

// création de ma route.
router.get("/year", function (req, res) {
  const year = Date.now();
  res.json({ now: year.getFullYear() });
});

module.exports = router;

//let date = new Date();
//let year = date.getFullYear();
//res.json({year:"2023"})
//});
