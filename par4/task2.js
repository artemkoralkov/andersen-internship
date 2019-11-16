/* Имеются две базовых функции 	prepareGreenTea
(готовит чашку зеленого чая) и prepareBlackTea 
(готовит чашку черного чая), которые могут быть
переданы в Функцию getTea для приготовления нужного
количества чашек чая указанного вида. Допишите скрипт
в указанном месте так, чтобы на выходе из него
в переменной tea4GreenTeamFCC было 27 чашек зеленого чая,
а в prepareBlackTea 13 чашек черного чая. */
const prepareGreenTea = () => 'greenTea';
const prepareBlackTea = () => 'blackTea';
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
console.log(tea4GreenTeamFCC, tea4BlackTeamFCC);
