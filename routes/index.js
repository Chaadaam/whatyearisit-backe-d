var express = require("express");
var router = express.Router();

// création de ma route.
router.get("/year", function (req, res) {
  const date = Date.now();
  const year = date.getFullYear;
  res.json({ now: year });
});

module.exports = router;

//let date = new Date();
//let year = date.getFullYear();
//res.json({year:"2023"})
//});
