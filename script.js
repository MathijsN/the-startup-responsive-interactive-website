if (!('CommandEvent' in window)) {
    // 1. Fake CommandEvent constructor (you understood this part)
    window.CommandEvent = class CommandEvent extends CustomEvent {
        constructor(type, options = {}) {
            super(type, options);
            this.command = options.command || '';
            this.source = options.source || null;
            this.tag = options.tag || '';
        }
    };

    // 2. THE KEY PART: Auto-dispatch on click for elements with commandfor/command
    document.addEventListener('click', function(e) {
        const button = e.target.closest('button[commandfor][command]');
        if (!button) return;
        
        const targetId = button.getAttribute('commandfor');
        const command = button.getAttribute('command');
        const target = document.getElementById(targetId);
        
        if (target) {
            // Dispatch CommandEvent ON TARGET (not button)
            const event = new CommandEvent('command', {
                bubbles: true,
                composed: true,
                cancelable: true,
                command,
                source: button
            });
            target.dispatchEvent(event);
        }
    }, true); // capture phase
}

window.addEventListener('command', function (ev) {
    console.log(ev.target);

    ev.target.toggleAttribute('disabled')

}, { capture: true });
