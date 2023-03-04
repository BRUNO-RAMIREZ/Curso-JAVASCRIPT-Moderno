// TODO: Sintax for create one class
class PersonClass {
    name;
    code;
    phrase;

    constructor(name = 'empty name field', code = 'empty code field', phrase = 'empty phrase field') {
        this.name = name;
        this.code = code;
        this.phrase = phrase;
    }

    sing(track) {
        return `Hellow, I am sing ${track} today!`;
    }

    jump() {
        return 'I am, jump';
    }

}

class ChildClass extends PersonClass {
    isHappy;

    // TODO: ERROR
    // constructor() {
    // }

    // TODO: CORRECT
    constructor(code, name, phrase) {
        super(code, name, phrase);
        this.isHappy = true;
    }

    // Sobreescritura method
    sing(track) {
        return `Hellow, I am sing ${track} Nigth!`;
    }

    //Invocation Method Father
    invocationMethodFather() {
        return super.jump();
    }
}

const child = new ChildClass(777, 'Javier', 'Hola Mundo');
console.log(child);

// TODO: Extends from a method Father Class
console.log(child.sing('Hearths to World!'))

// TODO: Invocation to method the Father Class
console.log(child.invocationMethodFather());