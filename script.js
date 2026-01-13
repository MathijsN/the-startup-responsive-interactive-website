const buttons = document.querySelectorAll('.trigger-list')
const saveSettingsButton = document.querySelector('.save-button')
const saveSettingsButtonSpan = document.querySelector('.save-button span')
const saveSettingsButtonSvg = document.querySelector('.save-button svg')
const form = document.querySelector('.settings-form')
const formSubmit = document.querySelector('.save-button')
const inputs = document.querySelectorAll('input[type="checkbox"][required]')
const fieldsets = document.querySelectorAll('fieldset')

let validityArr = []


// Ondersteund de browser 'CommandEvent'?
// Zo niet dan:
if (!('CommandEvent' in window)) {

    buttons.forEach(button => {
        button.addEventListener('click', (ev) => {

            const fieldset = ev.target.closest("fieldset")

            fieldset.classList.toggle("disabled-fieldset")
        })
    })

    // Zo wel dan:
} else {

    window.addEventListener('command', function (ev) {

        ev.target.classList.toggle('disabled-fieldset')
    }, { capture: true });

}



form.addEventListener('submit', (ev) => {

    // Zijn alle required inputs ingevuld?

    if (validityArr.every(item => {
        item === true
    })) {

        saveSettingsButtonSpan.classList.add('save-animation')
        saveSettingsButtonSvg.classList.add('save-animation')

        ev.preventDefault()

        // Na x aantal tijd de classes weer weghalen
        setTimeout(() => {

            saveSettingsButtonSpan.classList.remove('save-animation')
            saveSettingsButtonSvg.classList.remove('save-animation')
        }, 2000)
    }
})

inputs.forEach(input => {

    // Bij elke verandering in een input:
    input.addEventListener('change', () => {
        console.log(validityArr)

        inputs.forEach(input => {

            // Voor elke input de array aanvullen met een true of false, kijkend naar een valid input.
            validityArr.push(input.checkValidity())
        })

        // Array reset zodat het niet blijft aanvullen
        validityArr = []
    })
})



// Zodat browsers zonder JS het ook kunnen gebruiken voeg ik hier pas de class toe

function addInitialFieldsetClass() {
    fieldsets.forEach(fieldset => {
        fieldset.classList.add('disabled-fieldset')
    })
}

addInitialFieldsetClass()