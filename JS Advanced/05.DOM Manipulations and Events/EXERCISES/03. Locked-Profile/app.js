function lockedProfile() {
    const main = document.querySelector('#main')
    main.addEventListener('click', onClick);

    function onClick(ev) {
        if (ev.target.tagName == 'BUTTON') {
            const profile = ev.target.parentNode;
            let isLocked = profile.querySelector('input[type=radio]:checked').value =='lock';
            if (isLocked) {return;}
        
        let div = profile.querySelector('div');
        let isVusible = div.style.display 
        profile.querySelector('BUTTON').textContent = isVusible ? 'Show more' : 'Hide it'
        div.style.display = isVusible ? '' : 'block'
            
        
        }
    }
}