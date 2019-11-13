/* В указанном месте примените конструкцию с методом bind() так,
чтобы this внутри функции func всегда указывал на объект phrase. */
const phrase = {
  value: 'привет'
};

function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}
// Тут воспользуйтесь bind()
const newfunc1 = func.bind(phrase, 'Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
const newfunc2 = func.bind(phrase, 'Петров', 'Петр'); // тут должно вывести 'привет, Петров Петр'
newfunc1();
newfunc2();
