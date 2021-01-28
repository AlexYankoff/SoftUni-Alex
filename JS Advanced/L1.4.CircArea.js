circArea = (r) => {
    let argType = typeof r;
    if (argType == "number") {
        let area = (Math.pow(r,2)*Math.PI).toFixed(2);
        console.log(area)
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argType}.`);
    }
    
}
circArea(5);
circArea("baba");
circArea("5");