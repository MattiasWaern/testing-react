// import { createRoot } from 'react-dom/client';



class Car {
  constructor(name){
    this.brand = name;
  }

  present(){
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod){
    super(name);
    this.model = mod;
  }
  show(){
    return this.present() + ', it is a ' + this.model
  }
}

const mycar = new Model("Ford", "Mustang");
mycar.show();

const val = "ANNIKITA";
const hello = () => `Hello ${val}`;

console.log(hello());

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map(x => x * 2);

console.log(doubledNumbers);

const users = [
  {id: 1, name: 'Mattias', age: 21},
  {id: 2, name: 'Annika', age: 21},
  {id: 3, name: 'Roberto', age: 251},
];

function UserList(){
  return (
    <ul>
      {users.map(user =>
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

const fruitlist = ['apple', 'banana', 'cherry'];

function App(){
  return(
    <ul>
      {fruitlist.map((fruit, index, array) =>{
        return(
          <li key={fruit}>
            Number: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  )
}


const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck ,suv] = vehicles;

document.getElementById('test').innerHTML =  car;

function dateInfo(dat){
const d = dat.getDate();
const m = dat.getMonth() + 1;
const y = dat.getFullYear();

return [d, m, y];
}

const [date, month, year] = dateInfo(new Date());

const person = {
  firstName: "Mattias",
  lastName: "Waern",
  age: 21,
  car:{
    brand: 'Ford',
    model: 'Mustang',
  }

};

let message = `My name is ${person.firstName}, and I drive a ${person.car.brand} ${person.car.model}.`;

document.getElementById('date').innerHTML = message;
