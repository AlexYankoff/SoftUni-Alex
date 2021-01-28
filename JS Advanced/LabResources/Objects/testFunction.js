const dog = {
    firstName: 'Tajra',
    gender: 'Female',
    
    info() {
        return`${this.firstName} is ${this.gender}`;
    }
};

console.log(dog.info());


const mother = {
    firstName: 'Gery',
    gender: 'Female',
}

const infoTest = dog.info;

mother.info = infoTest;


console.log(mother.info())