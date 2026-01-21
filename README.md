Ontwerp en maak een responsive website voor een startup.

De instructies voor deze opdracht staan in: [INSTRUCTIONS.md](https://github.com/fdnd-task/the-startup-responsive-interactieve-website/blob/main/docs/INSTRUCTIONS.md)

# Campspace


## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
The goal of this project is to make the settings page for the notifications accessible and user friendly.

<img width="1440" height="1024" alt="campspace 2" src="https://github.com/user-attachments/assets/1a42d945-1acd-435c-a754-75882a1763da" />


[Live link](https://mathijsn.github.io/the-startup-responsive-interactive-website/)

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
### HTML
I used a fieldset to group the different notification types. This fieldset can be toggled to show its content. This makes it easier for the user to navigate and find the specific notification they are looking for. Within the fieldset I used a details tag to split the options even more. The title of the specific notification is shown, but the options to turn them on/off are not. The option to toggle the notification is shown when the details are open.

The whole page is checked for keyboard navigation, color contrast and other WCAG requirements.

### CSS
CSS is used to style this page. There are multiple animations which uses disney principles to please the eyes.

### JS
The websites works without Javascript but shines when it's enabled. I made multiple functions to check and trigger different events. For example, JS checks if all input fields who have the attribute 'required' are active. If so, the submit button turns green and is ready to submit the form. Pressed a disabled input field? JS will alert you that this specific input is (currently) not changeable.

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


