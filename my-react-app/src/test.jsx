import React from 'react';

function Test() {
  // Din JavaScript-logik
  class Car {
    constructor(name) {
      this.brand = name;
    }
    present() {
      return 'I have a ' + this.brand;
    }
  }

  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  const mycar = new Model("Ford", "Mustang");
  const carMessage = mycar.show();

  const val = "ANNIKITA";
  const hello = `Hello ${val}`;

  const numbers = [1, 2, 3, 4];
  const doubledNumbers = numbers.map(x => x * 2);

  const users = [
    {id: 1, name: 'Mattias', age: 21},
    {id: 2, name: 'Annika', age: 21},
    {id: 3, name: 'Roberto', age: 251},
  ];

  const fruitlist = ['apple', 'banana', 'cherry'];

  const vehicles = ['mustang', 'f-150', 'expedition'];
  const [car, truck, suv] = vehicles;

  function dateInfo(dat) {
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
    car: {
      brand: 'Ford',
      model: 'Mustang',
    }
  };

  const message = `My name is ${person.firstName}, and I drive a ${person.car.brand} ${person.car.model}.`;

  // RETURNERA JSX
  return (
    <div>
      <h2>Car Info</h2>
      <p>{carMessage}</p>

      <h2>Hello Message</h2>
      <p>{hello}</p>

      <h2>Doubled Numbers</h2>
      <p>{doubledNumbers.join(', ')}</p>

      <h2>Users</h2>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            {user.name} is {user.age} years old
          </li>
        )}
      </ul>

      <h2>Fruits</h2> <p>{fruitlist}</p>
      <ul>
        {fruitlist.map((fruit, index, array) => {
          return (
      
            <li key={fruit}>
              Fruit: {fruit}, Index: {index}, Array Length: {array.length}
            </li>

            
          );
        })}
      </ul>

      <h2>Vehicle Test</h2>
      <p>Car: {car}</p>

      <h2>Date Info</h2>
      <p>Date: {date}, Month: {month}, Year: {year}</p>

      <h2>Person Info</h2>
      <p>{message}</p>
    </div>
  );
}

const testing = () => {
  
}


export default Test;