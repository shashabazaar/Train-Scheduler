var config = {
  apiKey: AIzaSyDIZ7P34FMLgSRVnoLeTrgG_b2bk7Hwvmg,
  authDomain: "train-schedule-4faf7.firebaseapp.com",
  databaseURL: "https://train-schedule-4faf7.firebaseio.com",
  storageBucket: "train-schedule-4faf7.appspot.com"
};

firebase.initializeApp(config);

var database = firebase.database();

// 2. Button for adding new trains
$("#new-train-btn").on("click", function(event) {
  event.preventDefault();

  // Grabs user input
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainStart = moment($("#train-start").val().trim(), "MM/DD/YYYY").format("X");
  var trainFrequency = $("#train-input").val().trim();

  let newTrain = {
    name: trainName,
    travel: destination,
    start: trainStart,
    frequency: trainFrequency,
  };
  console.log(trainName);
  console.log(destination);
  console.log(trainStart);
  console.log(trainFrequency);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#train-start").val("");
  $("#train-frequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().trainName;
  var destination = childSnapshot.val().destination;
  var trainStart = childSnapshot.val().trainStart;
  var trainFrequency = childSnapshot.val().trainFrequencyls
  ;

  // Employee Info
  console.log(trainName);
  console.log(destination);
  console.log(trainStart);
  console.log(trainFrequency);
 
  var trainStartPretty = moment.unix(trainStart).format("MM/DD/YYY");
  
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(trainStartPretty),
    $("<td>").text(trainFrequency),
  );

  $("#train-table > tbody").append(newRow);
});

console.log(trainName);
console.log(destination);
 // Assumptions
 var tFrequency = 7;
 // Time is 7:51 PM
var firstTime = "7:51";

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
 console.log(firstTimeConverted);

var currentTime = moment();
 console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

 var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
 console.log("DIFFERENCE IN TIME: " + diffTime);
 
 var tRemainder = diffTime % tFrequency;
 console.log(tRemainder);

 var tMinutesTillTrain = tFrequency - tRemainder;
 console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

 var nextTrain = moment().add(tMinutesTillTrain, "minutes");
 console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));



