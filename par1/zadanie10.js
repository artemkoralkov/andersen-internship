/* По введенному номеру дня недели вывести его название, используя оператор
множественного выбора. Нумерация дней недели начинается с 1 – понедельник, 2
— вторник и т. д. */
let num;
switch (num) {
  case 1:
    console.log('Понедельник');
    break;
  case 2:
    console.log('Вторник');
    break;
  case 3:
    console.log('Среда');
    break;
  case 4:
    console.log('Четверг');
    break;
  case 5:
    console.log('Пятница');
    break;
  case 6:
    console.log('Суббота');
    break;
  case 7:
    console.log('Воскресенье');
    break;
  default:
    console.log('Введите число от 1 до 7');
}
