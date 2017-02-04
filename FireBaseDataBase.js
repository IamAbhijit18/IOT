
var firebase = require('firebase');
var status  = false ;

var dataBase =   function (firebaseDb){
var firebase = firebaseDb;
    var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "https://iothome.firebaseio.com/",
    storageBucket: ""
  };
  
  fireBaseApp = firebase.initializeApp(config);
  var database = firebase.database();

  exports. setDeviceStatus = function (firebase,dbPath,data)
  {
      database.ref('Hall/Lamp1/').set({Status:'ON'});
  }

 
  exports. GetDeviceStatus = function (firebase,dbPath,value)
  {
     
      return  getStatus(firebase,dbPath,value);;
        
  }

  var getStatus = function (firebase,dbPath,value, callback) 
  {
   return database.ref('Hall/Lamp1/').once('value');
  }

} 

 dataBase(firebase);

  
