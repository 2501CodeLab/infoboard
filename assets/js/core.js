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
}
