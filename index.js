// ..........Lesson 5 April 6, 2021...........................
// <<<<<<<<<<<<OOP>>>>>>>>>>>>>>>>>>>>>
// Object Orientation Principles

let valeriya = {
  name: 'Valeriya',
  hair: 'black',
  payment: 1000,
  greeting: function (greeting) {
    document.write(`Всім привіт. Мене звати ${this.name}`)
    document.write(`<br>`)
  },
  hunt: function (hunt) {
    document.write(`Привіт. У нас відкрита позиція ${position}`)
    document.write(`<br>`)
  }
}




valeriya.hunt('Middle React Dev');
valeriya.greeting('Alla');



//..........................Function"KONSTRUCTOR"................30:00:00

function User(age, name, gender = 'Rejected include', skill = 'JS') {
  this.age = age;
  this.gender = gender;
  this.name = name;
  this.skill = skill;

  this.greeting = function () {
    document.write(`Всім привіт. Мене звати ${this.name}`);
    document.write(`<br>`);
  }
}


const dimas = new User(25, 'Dimas', 'male');
const olga = new User(20, 'Olya', 'female');
const taisiya = new User(85, 'Tosya');

let andrii = new User(23, 'Andy', 'male', ['Java, JS'])

dimas.greeting()

taisiya.greeting();

console.log(dimas);
console.log(olga);
console.log(taisiya);
console.log(andrii);


// ...........................'Clasu Konstruktoru'..........................


class Human {
  constructor(age, name, gender) {
    this.age = age;
    this.name = name;
    this.gender = gender;
    this.money = 0;
  }

  eat() {
    console.log('Om nom nom');
  }

  goWork() {
    this.money += 100;
  }
}


// We use here super() "NASLIDUVANYA"
class Developer extends Human {
  constructor(age, name, gender, skill) {
    super(age, name, gender);
    this.skill = skill;
  }

  goWork() {
    this.money += 999999;
  }

  codding() {
    console.log(`Click click click on ${this.skill}`)
  }
}


// 1:16:00 Nasliduvannya vid nasliduvannya
// class CTO extends Developer {
//   constructor(age, name, gender, skill, magarestvo, slaves = []) {
//     super(age, name, gender, skill);
//     this.magarestvo = magarestvo;
//     this.slaves = slaves;
//   }
//
//   eat() {
//     console.log('I am going to restaurant today')
//   }
//
//   goWork() {
//     this.money += 300;
//   }
//
//   showSlaves() {
//     for (const slave of this.slaves) {
//       console.log(`My name is ${slave.name || 'userName'}`)
//       console.log('_________________________')
//     }
//   }
// }
//
// let daniel = new Human(18, 'Daniel', 'Developer');
// let noNameUser = new Human(89, null, '404');
//
// daniel.goWork();
// daniel.goWork();
// daniel.goWork();
//
// daniel.eat();
//
// daniel.goWork();
//
// console.log(daniel);



// let daniel20 = new Developer(36, 'ElDaniello', 'Developer', 'JS');
//
// console.log(daniel20);
// daniel20.eat();
// daniel20.goWork()
// daniel20.goWork()
// daniel20.codding()
// console.log(daniel20);



// let megaDen = new CTO(
//   50,
//   'Danilo Igorovich',
//   'boss',
//   [],
//   100,
//   [daniel, daniel20, noNameUser]);
//
// megaDen.eat();
// megaDen.codding();
// megaDen.goWork()
//
// console.log(megaDen);
//
// megaDen.showSlaves()

