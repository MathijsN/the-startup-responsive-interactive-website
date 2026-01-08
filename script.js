window.addEventListener('command', function(ev) {
  console.log(ev.target);

  ev.target.toggleAttribute('disabled')

  

}, {capture: true});