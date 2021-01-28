function solve(arr) {
   arr.sort((a,b) =>a.localeCompare(b));
   arr.forEach(print);
   
   function print(element, i, arr) {
        console.log(`${i+1}.${element}`);
    }
       
}

solve(["John", "Bob", "Christina", "Ema"])