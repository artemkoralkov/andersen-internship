/* Составить описание класса для представления времени.
Предусмотреть возможности установки времени и изменения
его отдельных полей (час, минута, секунда) с проверкой
допустимости вводимых значений. В случае недопустимых
значений полей выбрасываются исключения. Создать методы
изменения времени на заданное количество часов, минут и секунд. */
class Time {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  setHours(hours) {
    if (hours > 24) {
      throw new Error('Некорректное значение');
    }
    this.hours = hours;
  }

  setMinutes(minutes) {
    if (minutes > 60) {
      throw new Error('Некорректное значение');
    }
    this.minutes = minutes;
  }

  setSeconds(seconds) {
    if (this.seconds > 60) {
      throw new Error('Некорректное значение');
    }
    this.seconds = seconds;
  }

  addHours(num) {
    if (this.hours + num > 24) {
      this.hours = (this.hours + num) % 24;
    } else {
      this.hours += num;
    }
  }

  addMinutes(num) {
    if (num > 60) {
      this.hours += Math.floor(num / 60);
      this.minutes += num % 60;
    } else {
      this.minutes += num;
    }
  }

  addSeconds(num) {
    if (num > 60) {
      this.minutes += Math.floor(num / 60);
      this.seconds += num % 60;
    } else {
      this.seconds += num;
    }
  }

  subHours(num) {
    if (this.hours - num < 1) {
      this.hours = this.hours - num + 24;
    } else {
      this.hours -= num;
    }
  }

  subMinutes(num) {
    if (num > 60) {
      this.hours -= Math.floor(num / 60);
      this.minutes -= num % 60;
    } else {
      this.minutes -= num;
    }
  }

  subSeconds(num) {
    if (num > 60) {
      this.minutes -= num / 60;
      this.seconds -= num % 60;
    } else {
      this.seconds -= num;
    }
  }

  getTime() {
    if (String(this.hours).length > 1) {
      console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
    } else {
      console.log(`0${this.hours}:${this.minutes}:${this.seconds}`);
    }
  }
}
const time1 = new Time(9, 20, 45);
time1.getTime();
time1.subHours(18);
time1.getTime();
