const buttons = document.querySelectorAll('.trigger-list')

if (!('CommandEvent' in window)) {

    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            const fieldset = ev.target.closest("fieldset")

            console.log(ev.target.closest("fieldset"))
            fieldset.toggleAttribute("disabled")
        })
    })

}

window.addEventListener('command', function (ev) {
    console.log(ev.target);

    ev.target.toggleAttribute('disabled')
}, { capture: true });