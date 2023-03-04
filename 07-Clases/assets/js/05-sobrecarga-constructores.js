class Person {
    name;
    surname;
    country;

    static porObject({name, surname, country}) {
        return new Person(name, surname, country);
    }

    constructor(name, surname, country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }

    getInfo() {
        console.log(`Information: ${this.name}, ${this.surname}, ${this.country}`);
    }
 }
 const nameOne = 'Bruno',
       surnameOne = 'Ramirez',
       countryOne = 'Bolivia';

const personOne = new Person(nameOne, surnameOne, countryOne);
personOne.getInfo();

const alex = {
    name: 'Alex',
    surname: 'Vargas',
    country: 'Costa Rica'
}

const personTwo = Person.porObject(alex);
personTwo.getInfo();