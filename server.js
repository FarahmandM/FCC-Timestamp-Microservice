/*
 * @author Farahmand Moslemi
 */

var express = require('express'),
  strftime = require('strftime');
  //chrono = require('chrono-node');

var app = express();
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');
  res.render('index', {base: 'https://' + req.hostname});
});

app.get('/:d', function(req, res) {
  //app.set('content-type', 'application/json');
  var param = req.params.d, data = {}, unix = null, natural = null;
  if (param == Number(param)) {
    unix = Number(param);
  } else if (Number.isInteger(new Date(param).getTime())) {
  //} else if (!chrono.parseDate(param)) {
    unix = new Date(param).getTime();
  }
  if (unix) {
    if (strftime('%d', new Date(unix)) < 10) {
      natural = strftime('%B%e, %Y', new Date(unix));
    } else {
      natural = strftime('%B %d, %Y', new Date(unix));
    }
  }
  data = {
    "unix": unix,
    //"natural": strftime('%B %e, %Y', new Date(Number(param)))
    "natural": natural
  };
  res.json(data);
  //res.send(data);
});
app.listen(parseInt(process.env.PORT));