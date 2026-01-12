const buttons = document.querySelectorAll('.trigger-list')
const saveSettingsButton = document.querySelector('.save-button')
const saveSettingsButtonSpan = document.querySelector('.save-button span')
const saveSettingsButtonSvg = document.querySelector('.save-button svg')
const form = document.querySelector('.settings-form')
const formSubmit = document.querySelector('.save-button')

if (!('CommandEvent' in window)) {

    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {
            const fieldset = ev.target.closest("fieldset")

            console.log(ev.target.closest("fieldset"))
            fieldset.toggleAttribute("disabled")
        })
    })

} else {

    window.addEventListener('command', function (ev) {
        console.log(ev.target);

        ev.target.toggleAttribute('disabled')
    }, { capture: true });

}



form.addEventListener('submit', (ev) => {

    if (!form.checkValidity()) {
        formSubmit.setAttribute("disabled")
    }
    else {
        formSubmit.removeAttribute("disabled")

        saveSettingsButtonSpan.classList.add('save-animation')
        saveSettingsButtonSvg.classList.add('save-animation')

        setTimeout(() => {

            saveSettingsButtonSpan.classList.remove('save-animation')
            saveSettingsButtonSvg.classList.remove('save-animation')
        }, 2000)

        ev.preventDefault()
    }
})