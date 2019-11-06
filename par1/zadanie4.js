/* Проверить трехзначное число на четность и найти сумму его цифр, если число
четное, или произведение его цифр, если число нечетное.
*/
let nmb = 333;
nmb = String(nmb);
let num;
if (nmb % 2 === 0) {
  num = 0;
  nmb = nmb.split('');
  for (let i = 0; i <= 2; i++) {
    num += +nmb[i];
  }
  console.log(num);
} else {
  num = 1;
  nmb = nmb.split('');
  for (let i = 0; i <= 2; i++) {
    num *= +nmb[i];
  }
  console.log(num);
}
