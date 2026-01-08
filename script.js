// console.log(Object.getPrototypeOf(window.CommandEvent))
// Event()

// if (!('CommandEvent' in window)) {
    
//     Event.prototype.myCommandEvent = function(callbackFunction) {
//     }
// }

window.addEventListener('command', function (ev) {
    console.log(ev.target);

    ev.target.toggleAttribute('disabled')

}, { capture: true });
 
