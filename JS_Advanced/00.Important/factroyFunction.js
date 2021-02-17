function createRect(width, height) {
  function perimeter() { //функцията е зедно с конструктора във функция createRect и затова няма this
    const p = 2*width+2*height
    return p
    
  }
  
  const rect = { 
      width, 
      height,
      perimeter,
     };
    rect.getArea = () => {
      return rect.width * rect.height; //функцията е зедно с конструктора във функция createRect и затова няма this
    };
   
    return rect;
  }
  
  const ayRec= createRect(5,20)
  const bigRec = createRect(20,30)
  console.log(ayRec)
  console.log(ayRec.getArea())
  console.log(bigRec.getArea())
  console.log('Perimeteres:')
  console.log(ayRec.perimeter())
  console.log(bigRec.perimeter)