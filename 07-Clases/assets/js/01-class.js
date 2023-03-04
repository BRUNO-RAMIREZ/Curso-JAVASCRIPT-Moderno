// TODO: Sintax for create one class
class PersonClass {
    name;
    code;
    phrase;
    _direction;

    constructor(name = 'empty name field', code = 'empty code field', phrase = 'empty phrase field') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
        this._direction = '';
        console.log('Hola!');
    }

    // Forma de Fernando Herrera
    set setCode(code) {
        this.code = code;
    }

    // Forma Bruno Ramirez
    set direction(direction) {
        this._direction = direction;
    }

    sing(track) {
        return `Hellow, I am sing ${track} today!`;
    }

}

const person = new PersonClass('Bruno', undefined, 'Hola, buenos dias!');
console.log(person);

const methodPerson = person.sing('Healt to ship');
console.log(methodPerson);

person.setCode = 555;
person.direction = 'Av. Sprinfiedld Calle Siempre Viva';

