const arr = [ {name:'Boby', Salary:100}, {name:'Dony', Salary:90}]
arr.sort((a,b) => a.Salary - b.Salary)
console.log(arr)

dep = 'technical'

//тествам как се достъпват 
const deep =  { technical:{boby:'engineer', dony:"Mechainc"}, hr:{gery:'trz'}}
deep.technical['boby'] = "Techinic"
don = 'dony'
deep['technical'][don] = "electrical eng"
console.log(deep.technical)
console.log(deep['hr'].gery)

//ДА СЕ ВНИМАВА С КАВИЧКИТЕ - АКО Е КЛЮЧ Е С КАВИЧКИ, А ПРОМЕНЛИВА Е БЕЗ!!!!


