/* Вводится четырёхзначное число (abcd). Вывести сумму ab + cd. */
let nmb = 1234;
nmb = String(nmb);
let ab = nmb.slice(0, 2);
ab = +ab;
let cd = nmb.slice(2);
cd = +cd;
console.log(ab + cd);
