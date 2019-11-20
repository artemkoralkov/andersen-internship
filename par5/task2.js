/* Определить класс Children, который содержит такие поля (члены класса):
закрытые – имя ребенка, фамилию и возраст, публичные – методы ввода данных
и отображения их на экран. Создать два объекта класса, внести данные и показать их. */
const Children = (name, surname, age) => {
  let Name = name;
  let Surname = surname;
  let Age = age;
  const setName = function(val) {
    Name = val;
  };
  const setSurname = function(val) {
    Surname = val;
  };
  const setAge = function(val) {
    Age = val;
  };
  const getName = () => console.log(Name);

  const getSurname = () => console.log(Surname);

  const getAge = () => console.log(Age);
  return { setName, setSurname, setAge, getName, getSurname, getAge };
};
const vasia = Children('Ivan', 'Ivanov', 10);
console.log(vasia.Name);
vasia.getName();
vasia.setName('Vasia');
vasia.getName();
