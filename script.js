const buttons = document.querySelectorAll('.trigger-list')
const saveSettingsButton = document.querySelector('.save-button')
const saveSettingsButtonSpan = document.querySelector('.save-button span')
const saveSettingsButtonSvg = document.querySelector('.save-button svg')
const form = document.querySelector('.settings-form')
const formSubmit = document.querySelector('.save-button')
const inputs = document.querySelectorAll('input[type="checkbox"][required]')

let validityArr = []

if (!('CommandEvent' in window)) {

    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {

            const fieldset = ev.target.closest("fieldset")

            // fieldset.toggleAttribute("disabled")
            fieldset.classList.toggle("disabled-fieldset")
        })
    })

} else {

    window.addEventListener('command', function (ev) {

        // ev.target.toggleAttribute('disabled')
        ev.target.classList.toggle('disabled-fieldset')
    }, { capture: true });

}



form.addEventListener('submit', (ev) => {

    if (validityArr.every(item => {
        item === true
    })) {

        saveSettingsButtonSpan.classList.add('save-animation')
        saveSettingsButtonSvg.classList.add('save-animation')

        ev.preventDefault()
    
        setTimeout(() => {
    
            saveSettingsButtonSpan.classList.remove('save-animation')
            saveSettingsButtonSvg.classList.remove('save-animation')
        }, 2000)
    }
})

inputs.forEach(input => {
        input.addEventListener('change', () => {
            console.log(validityArr)

            inputs.forEach(input => {

                validityArr.push(input.checkValidity())
            })
        validityArr = []
        })
    })