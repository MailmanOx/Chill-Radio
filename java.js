var lofiStream = document.querySelector('#lofi-stream')

var now = new Date()
var hours = now.getHours()

if (hours <= 12) {
  lofiStream.src ="https://www.youtube.com/embed/-5KAN9_CzSA?autoplay=1"
  lofiStream.alt = "Jazz"
}
else {
  lofiStream.src = "https://www.youtube.com/embed/VfW86fnQL5w?autoplay"
  lofiStream.alt = "Lofi"
}