var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyBp5xOVikCrlQBK0pxfU43Me2qy4zkMQh4",
    authDomain: "payphone-f4a67.firebaseapp.com",
    databaseURL: "https://payphone-f4a67.firebaseio.com",
    storageBucket: "payphone-f4a67.appspot.com",
    messagingSenderId: "202102323605"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

//check if firebasedata exists


/*  "/payments"
 *    GET: finds all payments
 *    POST: creates a new payment
 */

app.get("/payments", function(req, res) {
});

app.post("/payments", function(req, res) {

	var newPayment = req.body;

  if (!(req.body.price || req.body.merchantID)) {
    handleError(res, "Invalid user input", "Must provide a price and merchantID", 400);
  }
  usersRef.once('/merchants', function(snapshot) {
  if (snapshot.hasChild(merchantID)) {
  	//publish payment if merchant exists
    function writeUserData(price, merchantID, uniqueID) {
    	firebase.database().ref('payments/' + merchantID).set({
    		unique: uniqueID,
    		merchant: merchantID,
    		amount : price
    	});
    }
}else {
  	handleError(res, "Invalid MerchantID","Please provide a valid one", 400);
  }
});
  

});


/*  "/payments/:id"
 *    GET: find payment by id
 *    PUT: update payment by id
 *    DELETE: deletes payment by id
 */

app.get("/payments/:id", function(req, res) {
});

app.put("/payments/:id", function(req, res) {
});

app.delete("/payments/:id", function(req, res) {
});