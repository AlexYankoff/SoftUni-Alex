function validity(x1, y1, x2, y2) {
    if (Number.isInteger(Math.sqrt(x1 ** 2 + y1 ** 2))) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else { console.log(`{${x1}, ${y1}} to {0, 0} is invalid`); }

    if (Number.isInteger(Math.sqrt(x2 ** 2 + y2 ** 2))) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else { console.log(`{${x2}, ${y2}} to {0, 0} is invalid`); }

    if (Number.isInteger(Math.sqrt((x1-x2)**2+(y1-y2)**2))) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
     } else {console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`); }
}
validity(3, 0, 0, 4)
validity(2, 1, 1, 1)