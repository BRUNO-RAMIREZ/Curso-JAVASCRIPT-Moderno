// TODO: Sintax for create one class
class PersonClass {
    static _propertyStatic = 0;

    static get propertyStatic() {
        return PersonClass._propertyStatic;
    }

    static methodStatic() {
        // console.log(this.nombre);  undefined nombre
        return 'I am, method static';
    }

    name;
    code;
    phrase;
    _direction;

    constructor(name = 'empty name field', code = 'empty code field', phrase = 'empty phrase field') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
        this._direction = '';
        PersonClass._propertyStatic++;
    }

    // Forma de Fernando Herrera
    set setCode(code) {
        this.code = code;
    }

    // Forma Bruno Ramirez
    set direction(direction) {
        this._direction = direction;
    }

    get getCode() {
        return this.code;
    }

    get direction() {
        return this._direction;
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
const code = person.getCode;
const direction = person.direction;
console.log({code, direction});

console.log(`Property Static: ${PersonClass._propertyStatic}`);
console.log(`Get Static: ${PersonClass.propertyStatic}`);
console.log(`Method Static: ${PersonClass.methodStatic()}`);

// TODO: Its possible in Javascript, create news properties or methods out from the class.
PersonClass.newProperty = 'I am, new property';
console.log(PersonClass.newProperty);
console.log(PersonClass);