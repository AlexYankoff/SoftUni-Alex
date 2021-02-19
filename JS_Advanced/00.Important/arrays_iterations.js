const arr = [{toni:1}, {"moni":2}]


// за всяка стойност във всеки обект прибавяме 5
arr.forEach(el => {console.log(el[Object.keys(el)]+=5)}) 
console.log(arr)
console.log(typeof(arr))


const students  = [{"Name":'Gogo'}, {"Name":"Adi"}]

/*
    // проверка дали в масива има обект с дадена стойност(име в случая)
    if(arrsome(st =>st.Name == dish)== false){
        throw new Error("We do not have this dish")

*/
    
