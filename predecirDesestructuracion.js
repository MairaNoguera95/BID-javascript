// 1.
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // imprime 'Tesla'
console.log(otherRandomCar)// imprime 'Mercedes'
// 2.
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);// Produce un error name no esta definido en el objeto
console.log(otherName);
// 3.
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //imprime el valor de password '12345'
console.log(hashedPassword);// imprime indefinido porque passoword no esta dentro del objeto de person 

// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);// imprimer falso porque el valor de first es 2 y el alor de second es el 5, no son iguales
console.log(first == third); // imprime True porque el valor de first es 2 y el valor de third es 2 son iguales
//5.
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); //Imprime el valor de la variable key 'value' del objeto 
console.log(secondKey); //imprime toda la matriz de secondkey
console.log(secondKey[0]); //imprime el valor de la matriz del indice cero '1'
console.log(willThisWork); //imprime el valor guardado en la nueva variable creada '5'










