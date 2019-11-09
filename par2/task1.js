/* Создать массив, содержащий список членов вашей семьи.
С помощью методов встроенного объекта Array добавить
в массив двоюродных братьев (в начало массива)
и сестер (в конец массива), определить его длину.
*/
const family = ['Mom', 'Dad'];
family.unshift('Brother');
family.push('Sister');
console.log(family);
console.log(family.length);
