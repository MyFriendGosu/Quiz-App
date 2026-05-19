const axios = require('axios');

axios
  .get('https://opentdb.com/api.php?amount=1&category=9')
  .then(() => console.log('Test Passed: OpenTDB reachable'))
  .catch(() => console.log('Test Failed'));