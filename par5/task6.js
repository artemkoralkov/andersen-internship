/* Класс Покупатель: Фамилия, Имя, Отчество, Адрес, Номер кредитной карточки,
Номер банковского счета; Конструктор; Методы: установка значений атрибутов,
получение значений атрибутов, вывод информации. Создать массив объектов данного класса.
Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной
карточки находится в заданном диапазоне. */
class Customer {
  constructor(surname, name, patronymic, address, cardNumber, bankNumber) {
    this.surname = surname;
    this.name = name;
    this.patronymic = patronymic;
    this.address = address;
    this.cardNumber = cardNumber;
    this.bankNumber = bankNumber;
  }

  setName(tmpName) {
    this.name = tmpName;
  }

  setSurname(tmpSurname) {
    this.surname = tmpSurname;
  }

  setPatronymic(tmpPatronymic) {
    this.patronymic = tmpPatronymic;
  }

  setAddress(tmpAddress) {
    this.address = tmpAddress;
  }

  setCardNumber(tmpCardNumber) {
    this.cardNumber = tmpCardNumber;
  }

  setBankNumber(tmpBankNumber) {
    this.bankNumber = tmpBankNumber;
  }

  getName() {
    console.log(this.name);
  }

  getSurname() {
    console.log(this.surname);
  }

  getPatronymic() {
    console.log(this.patronymic);
  }

  getAddress() {
    console.log(this.address);
  }

  getCardNumber() {
    console.log(this.cardNumber);
  }

  getBankNumber() {
    console.log(this.bankNumber);
  }

  getInformation() {
    console.log(
      this.surname,
      this.name,
      this.patronymic,
      this.address,
      this.cardNumber,
      this.bankNumber
    );
  }
}
const cusromers = [
  new Customer('Ivanov', 'Ivan', 'Ivanovich', 86, 24564, 4848789),
  new Customer('Petrov', 'Petr', 'Petrovich', 98, 89456, 9856598),
  new Customer('Ivanov', 'Zvan', 'Ivanovich', 86, 21264, 4848789),
  new Customer('Petrov', 'Betr', 'Petrovich', 98, 82136, 9856598)
];
cusromers.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (b.name > a.name) {
    return -1;
  }
  return 0;
});
console.log(cusromers);
const cardNumberFilter = cusromers.filter(
  val => val.cardNumber >= 20000 && val.cardNumber <= 30000
);
console.log(cardNumberFilter);
