/* Переделайте решение предыдущей задачи так, чтобы вместо
метода call() был метод apply(). */
const phrase = {
  value: 'привет'
};

function func(surname, name) {
  console.log(`${this.value}, ${surname} ${name}`);
}

func.apply(phrase, ['Иванов', 'Иван']); // тут должно вывести 'привет, Иванов Иван'
