var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 4000));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var result = {
  "success": "true",
  "data": [
    {
      "name": "Josh",
      "title": "Developer"
    },
    {
      "name": "Perry",
      "title": "Developer"
    },
    {
      "name": "Max",
      "title": "CEO"
    }
  ]
};

app.get('/api/endpointNoCors', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    res.send(result);
  console.log('/endPointNoCors.  Got a request from host:', req.hostname, 'Origin:', req.headers.origin);
});

app.get('/NoCors', function(request,response) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");

    response.send('NoCors Hello World');
});

app.listen(app.get('port'), function() {
    console.log('Listening on port:' + app.get('port'));
});
