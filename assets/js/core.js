var config = {
  apiKey: "AIzaSyD8ewhXbak-ayHiPnEYVrElg6dqPoK_FnM",
  authDomain: "lt-infoboard.firebaseapp.com",
  databaseURL: "https://lt-infoboard.firebaseio.com",
  projectId: "lt-infoboard",
  storageBucket: "lt-infoboard.appspot.com",
  messagingSenderId: "678872744858"
};
firebase.initializeApp(config);
//
var mainData;
var globalCounter = 0;
//
$(document).ready(function() {
  jQuery("#headline").fitText(1.5);
  jQuery("#content").fitText(5.0);
});
//
function handleAnimEnd(id, dir) {
  console.log(id + " ENDED " + dir);
  if (dir == "in" && id == "content") {
    var calcTime = ($("#headline").text().length + $("#content").text().length) * 50;
    setTimeout(function() {
      $("#headline").animateCss("fadeOutLeft", "out");
    }, calcTime);
    setTimeout(function() {
      $("#content").animateCss("fadeOutLeft", "out");
    }, calcTime + 500);
    setTimeout(function(){
      loadNewSlide();
    }, calcTime + 1000);
    setTimeout(function() {
      $("#headline").animateCss("fadeInLeft", "in");
    }, calcTime + 1500);
    setTimeout(function() {
      $("#content").animateCss("fadeInLeft", "in");
    }, calcTime + 2000);
  }
}
//
function loadNewSlide() {
  if( (globalCounter + 1) == mainData.length){
    globalCounter = 0;
  } else {
    globalCounter++;
  }
  console.log(globalCounter);
  $("#headline").text(mainData[globalCounter].headline);
  $("#content").text(mainData[globalCounter].content);
  $("body").css("background-image", "url(" + mainData[globalCounter].img + ")");
  //

  //
}
//
var newsRef = firebase.database().ref('/');
newsRef.once('value').then(function(data) {
  mainData = data.val();
  console.log(mainData);
  $("#headline").text(mainData[globalCounter].headline);
  $("#content").text(mainData[globalCounter].content);
  $("body").css("background-image", "url(" + mainData[globalCounter].img + ")");
  setTimeout(function() {
    $("#headline").animateCss("fadeInLeft", "in");
  }, 1000);
  setTimeout(function() {
    $("#content").animateCss("fadeInLeft", "in");
  }, 1500);
});
