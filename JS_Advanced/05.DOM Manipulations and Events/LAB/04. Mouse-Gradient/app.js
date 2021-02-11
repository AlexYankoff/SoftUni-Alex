function attachGradientEvents() {
    document.getElementById('gradient').addEventListener('mousemove', onMove);
    const output = document.getElementById('result')
    
    function onMove(event) {
        const offsetX= event.offsetX;
        const percent = Math.floor(offsetX/event.target.clientWidth*100);
        console.log(percent);
        output.textContent = `${percent}%`
   

    }
}