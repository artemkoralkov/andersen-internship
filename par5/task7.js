/* Объявить основной класс с именем point,
с следующими данными: координаты точки ( х, у),
функция ввода данных. Создать второстепенный
класс Graphicpoint. В этом классе добавляются новые
данные: цвет точки, функция вывода координат точки.
Продемонстрировать работу объектов данного класса. */
class point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  setData(x, y) {
    this.x = x;
    this.y = y;
  }
}
class Graphicpoint extends point {
  constructor(x, y, color) {
    super(x, y);
    this.color = color;
  }

  getData() {
    console.log(this.x, this.y);
  }
}
const point1 = new Graphicpoint(2, 3, 'black');
point1.getData();
point1.setData(3, 5);
point1.getData();
