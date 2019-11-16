/* Имеется массив, содержащий годы рождения нескольких
людей. Используя встроенную функцию высшего порядка map(),
создайте новый массив, который будет содержать их возрасты
в 2019 году. */
const peopleBirthDate = [2015, 1940, 1990, 1986];
const peopleAge = peopleBirthDate.map(val => 2019 - val);
console.log(peopleAge); // [4, 79, 29, 33]