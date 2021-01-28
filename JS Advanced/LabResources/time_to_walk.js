function solve(steps, footpint,speed) {
    speed = speed*1000/3600;
    const dist = steps*footpint;
    const rest = Math.floor(dist/500);
    const time = dist/speed + rest*60;
    const hours = Math.floor(time/3600).toFixed(0).padStart(2,"0");;
    const min =Math.floor(time/60 - hours*60).toFixed(0).padStart(2,"0");
    const sec = (time%60).toFixed(0).padStart(2,"0");
    

    return`${hours}:${min}:${sec}`

}

console.log(solve(4000, 0.60, 5));
console.log(solve(2564, 0.70, 5.5));