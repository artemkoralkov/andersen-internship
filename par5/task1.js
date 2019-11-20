/* Описать класс Tiles (кафель), который будет содержать поля
с открытым доступом: brand, size_h, size_w, price и метод класса
getData(). Создать пару объектов класса и внести данные в поля.
Затем отобразить их, вызвав метод getData(). */
class Tiles {
  constructor(brand, size_h, size_w, price) {
    this.brand = brand;
    this.size_h = size_h;
    this.size_w = size_w;
    this.price = price;
  }

  getData() {
    console.log(this.brand, this.size_h, this.size_w, this.price);
  }
}
const caf1 = new Tiles('124', 5, 6, 200);
const caf2 = new Tiles('421', 6, 10, 300);
caf1.getData();
caf2.getData();
