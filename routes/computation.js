var express = require('express');
var router = express.Router();
 
/* GET computation page. */
router.get('/', function(req, res) {
  // Check if there is a query parameter 'x' in the request
  const x = req.query.x;
 
  if (x !== undefined) {
    // If 'x' is provided in the query, parse it to a float and calculate the logarithm
    const xFloat = parseFloat(x);
    if (xFloat <= 0) {
      res.status(400).send('Invalid input. x must be greater than 0.');
    } else {
      const result = Math.log(xFloat);
      res.send(`Math.log() applied to ${xFloat} is ${result}`);
    }
  } else {
    // If 'x' is not provided, generate a random value and calculate the logarithm
    const randomX = Math.random() * 10;
    const result = Math.log(randomX);
    res.send(`Math.log() applied to a random value ${randomX} is ${result}`);
  }
});
 
module.exports = router;