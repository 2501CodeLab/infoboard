$(document).ready(function() {
  jQuery("#headline").fitText(1.5);
  jQuery("#content").fitText(5.0);
});

setTimeout(function() {
  $("#headline").animateCss("fadeInLeft", "in");
}, 1000);
setTimeout(function() {
  $("#content").animateCss("fadeInLeft", "in");
}, 1500);


function handleAnimEnd(id, dir) {
  console.log(id + " ENDED " + dir);
  if(dir == "in" && id == "content"){
    var calcTime = ( $("#headline").text().length + $("#content").text().length ) * 50;

    setTimeout(function() {
      $("#headline").animateCss("fadeOutLeft", "out");
    }, calcTime);
    setTimeout(function() {
      $("#content").animateCss("fadeOutLeft", "out");
    }, calcTime + 500);

    //getNewSlide();

    setTimeout(function() {
      $("#headline").animateCss("fadeInLeft", "in");
    }, calcTime + 1500);
    setTimeout(function() {
      $("#content").animateCss("fadeInLeft", "in");
    }, calcTime + 2000);

  }
}
