function attachEventsListeners() {

    //select all textFields
    
    //select all buttons
    //one event listener for all buttons
    //const buttons =  document.querySelectorAll('input[type=button]')

    let days = document.querySelector('#days')
    let hours = document.querySelector('#hours')
    let minutes = document.querySelector('#minutes')
    let sec = document.querySelector('#seconds')
    
    document.querySelector('main').addEventListener('click', convert)

    function convert(ev) {
        let setValSec=0;
        if  (ev.target == document.querySelector('#secondsBtn')) {
          setValSec = (sec.value);  
        } else if  (ev.target == document.querySelector('input#minutesBtn')) {
            setValSec = Number(minutes.value)*60;
        }else if  (ev.target == document.querySelector('input#hoursBtn')) {
            setValSec = Number(hours.value)*60*60;
        }else if  (ev.target == document.querySelector('input#daysBtn')) {
            setValSec = Number(days.value)*60*60*24;
        } else {return;}

        console.log(setValSec)
        
        days.value = setValSec/60/60/24;
        hours.value =setValSec/60/60;
        minutes.value = setValSec/60;
        sec.value = setValSec;
    

    }

}