function speedCheck(speed, area) {
    let overSpeed;
    let limit;
    switch (area) {
        case "motorway": 
            limit = 130; break;
        case "interstate":
            limit = 90; break;
        case "city": 
            limit = 50;break;
        case "residential":
            limit = 20;break;
        }
    
    overSpeed = speed -limit;
    
    if (speed<=limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (overSpeed <= 20){
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - speeding`);
    } else if (overSpeed<= 40) {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - excessive speeding`);
    } else {
        console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - reckless driving`);

    }

    
}

speedCheck(140, 'motorway');
speedCheck(130, 'interstate');
speedCheck(120, 'residential');


