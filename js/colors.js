const scheme = document.querySelector("body").style;
let hue = 0;
// let speed = 100;

setInterval(() => {
  hue++;
  scheme.backgroundColor = `hsl(${hue}, 80%, 60%)`;
  scheme.borderColor = `hsl(${hue}}, 80%, 60%)`;
  hue = (hue > 255) ? 0 : hue;
}, 10);


function removeFadeOut( el, speed ) {
  var seconds = speed/1000;
  el.style.transition = "opacity "+seconds+"s ease";

  el.style.opacity = 0;
  setTimeout(function() {
      el.parentNode.removeChild(el);
  }, speed);
}

removeFadeOut(document.getElementById('hide-mistakes'), 2000 );
