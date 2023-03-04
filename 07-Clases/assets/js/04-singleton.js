// Una unica instancia
class Singleton {
    static instance;
    name;

    constructor(name = '') {
        if(!!Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;
        this.name = name;
    }
}

const instanceOne = new Singleton('Hulk');
const instanceTwo = new Singleton('Black Panther');
console.log(`Name from the instance one: ${instanceOne.name}`); // Huk
console.log(`Name from the instance one: ${instanceTwo.name}`); // Hulk