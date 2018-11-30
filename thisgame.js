// const hobbit = {
//     name: 'Frodo',
//     food: 'Efo riro',
//     cook: function (){
//         console.log(`${this.name} likes to cook some ${this.food}`)
//     }
// }
// hobbit.cook();

// const person = {
//     name: 'Bob',
//     age: 22
// }

// const skills = ['HTML', 'css', 'Drawing', 'JS'];

// function introduce(skills, ss, ssd, sss) {
 
//     console.log(`Hello, my name is ${this.name}, I am ${this.age}, and I have the following skills; ${skills} ${ss}, ${ssd}, ${sss}`)
// }
// introduce.call(person, ...skills);


// Constructor function

/*
function CordialPerson(person){
    this.person = person;
    this.greeting = 'Hello';
    this.age = age;
    this.strength = strength;
    this.tribe = tribe;
    this.speak = function() {
        console.log(`${this.greeting}, ${this.person}`)
    }
}


const strength = 'fire';
const tribe = 'Turks';
const age = '54';

const jerry = new CordialPerson('Newton');
const Newton = new CordialPerson('jerry');

console.log(jerry);


jerry.speak();
Newton.speak();


*/

//========================================== PROTOTYPES ============>
/*
class Parent {
    constructor(attr) {
        this.age = attr.age;
        this.name = attr.name;
        this.enemy = attr.enemy;
        this.location = attr.location;
        this.talk = attr.talk;
    };
    speak () {
        return `I am ${this.name} of ${this.location}. I am just ${this.age}. Remember,  ${this.talk}`
    };

    fight () {
        return `I am ${this.name} and I am ready to fight with ${this.enemy}.`
    };
}

class Child extends Parent {
    constructor (chAttr) {
        super (chAttr);
        this.food = chAttr.food;
    };
    eat () {
        return `${this.name} wants to eat ${this.food}`
    }
};

const demi = new Child({
    age: 3,
    name: 'Demi',
    location: 'Anaheim',
    talk: 'Ma Ma!',
    enemy: 'lolipop',
    food: 'Ice Cream'
});

const fred = new Parent({
    age: 33,
    name: 'Fred',
    location: 'Anaheim',
    talk: 'Oh yeah!!!',
    enemy: 'Willie'
});

const tchala = new Parent({
    age: 23,
    name: 'Tchala',
    location: 'Wakanda',
    talk: 'Wakanda Forever!!!',
    enemy: 'Killmonger'
});

// console.log(fred.age, fred.name, fred.location);
console.log(demi.location)

console.log(fred.speak());
console.log(fred.fight());
console.log(tchala.speak());
console.log(tchala.fight());
console.log(demi.speak());
console.log(demi.fight());
console.log(demi.eat());

*/



// ===================================================== THIS GAME =================>

class RootObject {
    constructor(attr) {
        this.dimensions = attr.dimensions;
        this.createdAt = attr.createdAt;
    };
    destroy() {
        return `${this.name} has been ELIMINATED!`
    };
};

// ====================================================== CHARACTERS ================>

class Character extends RootObject {
    constructor(stats) {
        super(stats);
        this.health = stats.health;
        this.name = stats.name;
        this.weapon = stats.weapon;
        this.faction = stats.faction;
        this.power = stats.power;
        this.special = stats.special;
    };

    takeDamage () {
        return `${this.name} took damage!`; // show the damage taken and how much hp left
    };

    greet (){
        return `I am ${this.name} of ${this.faction}. ${this.saying}`;
    };

    attack(enemy) {
        let damage = (Math.floor(Math.random() * this.power) + 5);
        enemy.health = enemy.health - damage;
        this.health = this.health - (damage/2);
        this.power = this.power - (damage/2.5);
        if (this.health <= 0) {
            return this.destroy();
        } else if (enemy.health <= 0) {
            return this.destroy();
        } else if (enemy.health < 30 && enemy.health > 1){
            return `${enemy.name}'s health is low, ATTACK!!! Health remains: ${enemy.health} points. ${this.name} health: ${this.health}`
        } else {
        return `${this.name} attacked ${enemy.name} with ${this.weapon}. ${enemy.name}: ${enemy.health} health left! ${this.name}: ${this.health} health left!`;
        };
    };

    heal() {
        let regenerate = (Math.floor(Math.random() * this.power) + 10);
        let regenSpecial = (Math.floor(Math.random() * this.special) + 10);
        this.health = this.health + regenerate;
        this.power = this.power + regenerate;
        this.special = this.special + regenSpecial;
        if (this.health > 100) {
            this.health = 100;
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        } else if (this.power > 100) {
            this.power = 100;
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        } else if (this.special > 100) {
            this.special = 100;
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        } else {
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        };
    };

    useSpecial(enemy) {
        let specialPowerDamage = (Math.floor(Math.random() * this.special) * 1.5);
        enemy.health = enemy.health - specialPowerDamage;
        this.health = this.health - (specialPowerDamage/2);
        this.special = this.special - (specialPowerDamage/2.5);
        if (this.health <= 0) {
            return this.destroy();
        } else if (enemy.health <= 0) {
            return this.destroy();
        } else if (enemy.health < 30 && enemy.health > 1){
            return `You Just used ${this.special}. ${enemy.name}'s health is low, ATTACK!!! Health remains: ${enemy.health} points. ${this.name} health: ${this.health}`
        } else {
        return `${this.name} attacked ${enemy.name} with ${this.special}. ${enemy.name}: ${enemy.health} health left! ${this.name}: ${this.health} health left!`;
        };
    };
};

const thanos = new Character({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    health: 100,
    name: 'Thanos',
    faction: 'Titan',
    weapon: 'Gauntlet',
    saying: 'I am Lord THANOS!',
    special: 30,
    power: 20
});

const hulk = new Character({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 4,
    },
    health: 100,
    name: 'Hulk',
    faction: 'Avengers',
    weapon: 'Smash Fury',
    saying: 'Dont get me Angry!',
    special: 50,
    power: 20
});

let obj = thanos;
let obj2 = hulk;

console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(thanos.heal());
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));