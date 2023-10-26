var express = require('express');
var router = express.Router();

let sum = 0;
let more = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  more++;
  sum += more;
  res.send(`Sum is: ${sum}`);
  res.send('respond with a resource');
  res.send('respond with a resource');
});

module.exports = router;
