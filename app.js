var express = require('express');
var fireBaseInit = require('./FireBaseDataBase');
var app = express();
app.set('port', (process.env.PORT || 9000));


app.get('/GetStatus', function (req, res) {
    var statusData = fireBaseInit.GetDeviceStatus();
    statusData.then(function(snapshot) {
         
         res.send(snapshot.val().Status);
        });
    
});


app.get('/SetStatus', function (req, res) {
    var statusData = fireBaseInit.setDeviceStatus();
    res.send("Status Updated..");
});



app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
