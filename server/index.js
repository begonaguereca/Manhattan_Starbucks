var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/starbucks', function (req, res) {

  request('https://gist.githubusercontent.com/lbud/35e4847d13e5524d08d3e547318cf689/raw/d44940c13e70b2bb683345c511f85d249ee5ccfc/starbucks.csv', function (error, response, body) {
    if(error) {
      console.log('error:', error)
    } else {
      let coffeeLocations = [];

      body.split('\n').forEach(cafe => {
        let cafeSplit = cafe.split(',');
        coffeeLocations.push(cafeSplit);
      });
      res.send(coffeeLocations)
    }
  });


});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
