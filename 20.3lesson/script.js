// function Human(options) {
//     const {name, age} = options;
//     this.name = name;
//     this.age = age;
// }

// Human.prototype.sayHello = function(){
//     console.log(`Hello! My name is ${this.name}. I'm ${this.age} years old`);
// };

// // instance

// const human = new Human({name : 'Peter', age : 42});




// //Extending class
// function Citizen(options){
//     const {hometown, ...humanOptions} = options;
//     Human.call(this, humanOptions)
//     this.hometown = hometown;
//     this.location = hometown;
// };

// //Citizen.prototype.__proto__ = Human.prototype;
// Citizen.prototype = Object.create(Human.prototype);

// Citizen.prototype.travel = function(city){
//     this.location = city;
// };

// Citizen.prototype.sayHello = function(){
//     console.log(`Hello! My location now is ${this.location}`)
// }

// const citizen = new Citizen({
//     hometown: 'London',
//     age: 27,
//     name: 'Paul',
// })

// //Суперкласс (родительский класс)

// function Car({make, model}){
//     this.make = make;
//     this.model= model;
//     this.distance = 0; //дистанция, которую проехала машина
//     this.isStarted = false;
// }; 

// Car.prototype.start = function(){
//     this.isStarted = true;
// };

// Car.prototype.move = function(){
//     if(!this.isStarted){
//         throw new Error(`Start ${this.make} ${this.model} before move`)
//     }

//     this.distance++
//     console.log(`Your distance is ${this.distance}`)
// }

// const car = new Car({
//     make : 'BMW',
//     model: 'x5'
// });

// // car.start()
// // car.move()

// function RacingCar(options){
//     Car.call(this, options);
// };

// // Наследуем прототип
// RacingCar.prototype = Object.create(Car.prototype);
// RacingCar.prototype.move = function(){
//     Car.prototype.move.call(this);

//     this.distance++
// }

// const racingCar = new RacingCar({
//     make: 'Porsche',
//     model: 911,
// })

// racingCar.start()
// racingCar.move()
// racingCar.move()

// console.log(racingCar)

//Practice

function Input(options){
    const {
        name, 
        placeholder, 
        type = 'text', 
        onInput = () => {}, 
        onChange = () => {},
    } = options;

    this.element = document.createElement('input');
    this.name = name;
    this.value = this.element.value;
    this.element.name = name;
    this.element.type = type;
    this.element.placeholder = placeholder;

    function addListeners(){
        this.element.addEventListener('change', (event) => {
            onChange(event);
        })

        this.element.addEventListener('input', (event) => {
            this.value = event.target.value;
           
            onInput(event);
        })

    }

    addListeners.call(this)
}

Input.prototype.render = function(container){
    container.append(this.element)
};


function Form(options){
    const {inputs, onSubmit, submitBtnText} = options;

    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = submitBtnText;

    this.inputs = inputs;
    this.form = document.createElement('form');

    function getFormValues(inputs) {
        return inputs.reduce((values, input) => {
          values[input.name] = input.value;
    
          return values;
        }, {});
      }

    this.form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formValues = getFormValues(this.inputs);
        onSubmit(formValues, event)
    })

    this.inputs.forEach(input => {
        input.render(this.form)
    });

    this.form.append(submitBtn)
}


Form.prototype.render = function(container) {
    container.append(this.form)
}

const loginInput = new Input({
    name: 'login',
    placeholder: 'login',
    
});

const passwordInput = new Input({
    name: "password",
    placeholder: "password",
    type: "password",
  });

const form = new Form({
    inputs: [loginInput, passwordInput],
    onSubmit: (values) => console.log(values),
    submitBtnText: 'welcome'

});


form.render(document.body)




