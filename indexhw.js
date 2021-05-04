// alert('Be better today than you were yesterday')
// // Home work 5, 5/3/2021

// Реалізовуємо свій компютерний магазин.
// =================================
// Необхідно реалізувати базовий клас комютера. Який має лише параметри:
// Оперативна память.
// Потужність процесора. (цифра від 0 до 1000)
// Назва.
// В кожного компютера має бути метод включання.
// =================================
// Від базового компютрера треба реалізувати ноутбук.
// Він має нову властивість дюймаж монітора.
//
// У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
// =================================
// Від ноутбука потрібно зробити ультрабук.
// Він має нову змінну ваги.
// При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
// =================================
// Від базвого класу потрібно створити базовий ПК.
// В нього має бути новий метод запуску ігор.
// Кількість FPS визначається як потужність / опервтивку.
// Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`
//
// Компютер можна апгрейдити.
// Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
// Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
// Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
// ==================================
// Від базового ПК необхідно зробити ігровий ПК.
// Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
// При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно видати помилку, (алерт, або консоль)
// що на цьому відрі ігри не запускаються.

class Computer {
  constructor(OperativeMemory, processorPower, name, turnOnMethod) {
    this.OperativeMemory = OperativeMemory;
    this.processorPower = 890;
    this.name = name;
    this.turnOnMethod = 'Turn on button Power';

  }
}

class Laptop extends Computer{
    constructor(OperativeMemory, processorPower, name, turnOnMetohd)
}












// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 38 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями ' +
// 'модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
//     додати в об'єкт функції:
// 39 drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} " +
// "на годину"
// 40 info () - яка виводить всю інформацію про автомобіль
// 41 increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// на значення newSpeed.
// 42 changeYear (newValue) - змінює рік випуску на значення newValue
// 43 addDriver (driver) - приймає об'єкт який "водій" з довільним набором ' +
// 'полів, і доавляет його в поточний об'єкт car.

// function Car(model, manufacturer, year, maxSpeed = 'number', capacity){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.capacity = capacity;
//     this.driver = 'No data';
//
//     this.drive = function()
//     {
//         console.log(`Hi drive with ${maxSpeed} per hour`)
//         document.write(`Hi drive with ${maxSpeed} per hour`)
//     },
//
//     this.info = function(){
//         console.log(`
//         model: ${model}
//         manufacturer: ${manufacturer}
//         year: ${year}
//         maxSpeed: ${maxSpeed}
//         capacity: ${capacity}
//
//         `)
//     },
//
//
//     this.increaseMaxSpeed = function(newSpeed){
//         maxSpeed = newSpeed;
//     },
//
//
//     this.changeYear = function(newValue){
//         this.year = newValue
//     },
//
//     this.addDriver = function(newDriver){
//         this.driver = newDriver
//     }
// }
//
// let myCar= new Car ('Roadster', 'Tesla', '2022', 350)
// console.log(myCar);
// car.drive();
// car.increaseMaxSpeed();
// car.addDriver();
// car.info();
// console.log(car.driver);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 46 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// 51 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car


// class Car{
//     constructor(model, manufacturer, year, maxSpeed, capacity){
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.capacity = capacity;
//         this.driver = 'No data';
//     }
//
//     drive()
//     {
//         console.log(`Hi drive with ${maxSpeed} kilometers per hour`)
//     }
//
//     info()
//     {
//         console.log(`
//         model: ${this.model};
//         manufacturer: ${this.manufacturer};
//         model: ${this.year};
//         model: ${this.maxSpeed};
//         model: ${this.capacity};
//         model: ${this.driver};`)
//     }
//
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = newSpeed;
//     }
//
//     changeYear(newValue){
//         this.year = newValue
//     }
//
//     addDriver(driver){
//         this.driver = driver
//     }
// }
//
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(450);
// car.changeYear(2023);
// car.addDriver ({name: 'Ilon Mask', age: 31});
// console.log(car.driver);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// 54 створити класс попелюшка з полями ім'я, вік, розмір ноги
// -- Створити 10 попелюшок , покласти їх в масив
// -- Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
//   туфелька яку він знайшов.
// 57 за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Human {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }
//
// class Cinderella extends Human{
//     constructor(name, age, footSize){
//         super(name, age);
//         this.footSize = footSize;
//     }
// }
// // const Cinderella1 = new Cinderella('Marina', '24', 37)
// // console.log(Cinderella1);
//
// class Prince extends Human{
//     constructor(name, age, footHeFound){
//         super(name, age);
//         this.footHeFound = footHeFound;
//     }
//
// }
// const prince1 = new Prince('Danilo', 21, 38);
// // console.log(prince1);
// const cinderellas = [
//     new Cinderella ('Diana', 21, 38),
//     new Cinderella ('Katya', 24, 35),
//     new Cinderella ('Marina', 23, 38),
//     new Cinderella ('Olya', 22, 36),
//     new Cinderella ('Maria', 26, 33),
//     new Cinderella ('Ira', 27, 37),
//     new Cinderella ('Angy', 22, 33),
//     new Cinderella ('Anna', 24, 38),
//     new Cinderella ('Natasha', 25, 37),
// ];
// for (const cinderella of cinderellas) {
//     if (cinderella.footSize === prince1.footHeFound){
//         console.log(cinderella)
//     }
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// 54 створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я,
// вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// 57 функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function User (name, age, footSize){
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
//
// }
//
// let prince1 = new User('Danulo', 21, 37);
// let cinderellas = [
//     new User('Diana', 21, 38),
//     new User('Katya', 24, 35),
//     new User('Marina', 23, 38),
//     new User('Olya', 22, 36),
//     new User('Maria', 26, 33),
//     new User('Ira', 27, 37),
//     new User('Angy', 22, 33),
//     new User('Anna', 24, 38),
//     new User('Natasha', 25, 37),
// ]
// for (const cinderella of cinderellas){
//     if(cinderella.footSize === prince1.footSize){
//         console.log(cinderella);
//     }
// }


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 134 Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// 139 addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {
//     model: 'Roadster',
//     manufacture: 'Tesla',
//     year: 2022,
//     maxSpeed: 360,
//     engineCapacity: 1500,
//     driver: 'No data',
//
//     drive: function(drive){
//         console.log(`Drive with ${this.maxSpeed} kilometers per hour`)
//     },
//     info: function(info){
//         console.log(`
//         model: ${this.model}
//         manufacture: ${this.manufacture}
//         maxSpeed: ${this.maxSpeed}
//         engineCapacity: ${this.engineCapacity}
//         driver: ${this.driver}
//         `)
//     },
//     increaseMaxSpeed: function(newSpeed){
//         this.maxSpeed = newSpeed
//     },
//
//     changeYear: function(newYear){
//         this.year = newYear
//
//     },
//
//     addDriver: function(driver){
//         this.addDriver = driver
//     },
//
// }
//
// car.drive();
// car.info();
// car.increaseMaxSpeed(450);
// car.changeYear(2023);
// car.addDriver ({name: 'Ilon Mask', age: 31});
// console.log(car.driver);

//
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
























