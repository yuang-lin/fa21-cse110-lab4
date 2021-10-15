var intervalID = setInterval(myCall, 1000);
function myCall () {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}
