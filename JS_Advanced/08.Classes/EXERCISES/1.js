class Rectangle {
    constructor(width,height, color) {
    this.width = width;
    this.height = height;
    this.color = color
    }
    calcArea() {
        return this.width*this.height
    }
}

const rec1 = new Rectangle(5, 10, 'red')
console.log(rec1)
console.log(rec1.calcArea())