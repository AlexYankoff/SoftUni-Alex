// function to create heroes register
function solve(input) {
    const register = []
    for( let hero of input) {
        
        const [name,level, items] = hero.split(' / ');
        const thisHero = {name, level:Number(level), 'items':items ? items.split(', '): []}
        register.push(thisHero)   
    }
    return JSON.stringify(register)
}


console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 ']
))