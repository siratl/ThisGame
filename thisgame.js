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
var powerStore = 0;
var specialStore = 0;

class Character extends RootObject {
    constructor(stats) {
        super(stats);
        this.health = stats.health;
        this.name = stats.name;
        this.weapon = stats.weapon;
        this.faction = stats.faction;
        this.power = stats.power;
        this.saying = stats.saying;
        this.special = stats.special;
        this.maxPower = this.power;
        this.maxSpecial = this.special;
        this.specialWeapon = stats.specialWeapon;
    };

    greet (){
        return `I am ${this.name} of ${this.faction}. ${this.saying}`;
    };

    attack(enemy) {
        if (this.power <= 0) {
            this.power = 1;
        };
        let damage = (Math.floor(Math.random() * this.power) + 1);
            console.log(Math.floor(this.power));
            console.log(this.maxPower);
        enemy.health = Math.floor(enemy.health - damage);
            console.log(enemy.health)
        this.health = Math.floor(this.health - (damage/2));
        this.power = Math.floor(this.power - (damage/2));
        powerStore = this.power;
            console.log(powerStore);
            console.log(damage);
            console.log(damage/2);
            console.log(this.health);
            console.log(this.power);
        if (this.health <= 0) {
            return `${this.destroy()} ${enemy.greet()}`;
        } else if (enemy.health <= 0) {
            return `${enemy.destroy()} ${this.greet()}`;
        } else if (enemy.health < 30 && enemy.health > 1){
            return `${enemy.name}'s health is low. Health remains: ${enemy.health} points. ${this.name} health: ${this.health}`;
        } else if (Math.sign(this.power) === -1) {
            this.power = 0;
            return `${this.name} attacked ${enemy.name} with ${this.weapon}. ${enemy.name}: ${enemy.health} health left! ${this.name}: ${this.health} health left!`;
        } else {
        return `${this.name} attacked ${enemy.name} with ${this.weapon}. ${enemy.name}: ${enemy.health} health left! ${this.name}: ${this.health} health left!`;
        };
    };
    
    useSpecial(enemy) {
        let specialPowerDamage = Math.floor((Math.random() * this.special) * 1.2);
        enemy.health = Math.floor(enemy.health - specialPowerDamage);
        this.health = Math.floor(this.health - (specialPowerDamage/3));
        this.special = Math.floor(this.special - (specialPowerDamage/2.5));
        specialStore = this.special;
            console.log(specialPowerDamage);
            console.log(enemy.health);
            console.log(this.health);
            console.log(this.special);
            console.log(specialPowerDamage/2.5);
            console.log(specialStore);

        if (this.health <= 0) {
            return `${this.destroy()} ${enemy.greet()}`;
        } else if (enemy.health <= 0) {
            return `You Just used ${this.specialWeapon} on ${enemy.name}. ${enemy.destroy()} ${this.greet()}`;
        } else if (enemy.health < 30 && enemy.health > 5){
            return `You Just used ${this.specialWeapon}. ${enemy.name}'s health is low. Health remains: ${enemy.health} points. ${this.name} health: ${this.health}`
        } else {
            return `${this.name} attacked ${enemy.name} with ${this.specialWeapon}. ${enemy.name}: ${enemy.health} health left! ${this.name}: ${this.health} health left!`;
        };
    }; 

    heal() {
        
            console.log(this.power);
        let regenerate = (Math.floor(Math.random() * this.maxPower) + 10);
        let regenSpecial = (Math.floor(Math.random() * regenerate) + 1);
        this.health = this.health + regenerate;
        this.power = powerStore + regenSpecial;
        this.special = specialStore + regenSpecial; 
            console.log(regenerate);
            console.log(regenSpecial)
            console.log(this.power);
            console.log(this.maxPower);
            console.log(this.health);
            console.log(this.special);
            console.log(this.maxSpecial);
            console.log(powerStore);
            console.log(specialStore);
        
        
        while (this.health > 100) {
            this.health = 100;
        } while (this.power > this.maxPower) {
            this.power = this.maxPower;
        } if (this.special > this.maxSpecial) {
            this.special = this.maxSpecial
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        } else {
            return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;
        };     

        
        // if (this.health > 100) {
        //     this.health = 100;
        //     console.log( `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`);
            
        // } else if (this.power > this.maxPower || this.special > maxSpecial) {
        //     this.power = this.maxPower;
        //     this.special = maxSpecial
        //     console.log( `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`);
            
        // } else if (this.special > maxSpecial) {
        //     this.special = maxSpecial;
        //     console.log( `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`);
        // } else {
        //     return `${this.name} used Heal. Health: ${this.health}, Power: ${this.power}, Special: ${this.special}`;  
        // };
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
    saying: 'I will crush you!',
    special: 40,
    specialWeapon: 'Infinity Stones',
    power: 20,
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
    weapon: 'Smash',
    saying: 'You wouldn\'t like me when im angry!',
    special: 50,
    specialWeapon: 'Fury',
    power: 30,
    
});

let obj2 = thanos; 
let obj = hulk;

console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.useSpecial(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj.heal());
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));
console.log(obj2.attack(obj));

