function rectangle(width, height, color){

    function calcArea() {
        return this.width*this.height
    }  
    
    const rect ={width,
        height,
        color: color[0].toUpperCase()+color.slice(1),
        calcArea
    }
   
    return rect
   }

    


let rect = rectangle(4, 5, 'red');
console.log(rect)
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
