function cooking(...args) {
    let num = Number(args[0]);
    for (let i = 1; i < args.length; i++) {
        switch (args[i]) {
            case "chop": num = num / 2; break;
            case "dice": num = Math.sqrt(num); break;
            case "spice": num +=1; break;
            case "bake": num *=3; break;
            case "fillet": num *=0.8; break;
        }
        console.log(num);
    }   
}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')