var path = require('path');
var express = require('express');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(port, function onStart(err) {
  if (err)
    console.error(err);
  else
    console.info('Starting dev server on port %s.', port);
});