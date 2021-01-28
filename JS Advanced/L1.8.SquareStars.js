function stars(number = 5) {
    for (let i=1; i<=number; i++ ) {
        console.log("* ".repeat(number));
    }
}
stars(3)