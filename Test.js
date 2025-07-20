/* Class */

class Person {
    name;
    age;
    phone

    constructor(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone
    }

    greet() {
        console.log('Hi', this.name)
    }
}
const Arish = new Person('Arish', 25, '9868821700')
const Kiran = new Person('Kiran', 27, '9868821710')

console.log(Arish)
Arish.greet()
console.log(Kiran)
Kiran.greet()
