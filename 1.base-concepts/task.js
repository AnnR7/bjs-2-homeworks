 "use strict";

function solveEquation(a, b, c) {
  // Вычисление дискриминанта
  const discriminant = b ** 2 - 4 * a * c;

  // Проверка значения дискриминанта
  if (discriminant < 0) {
    // Если дискриминант меньше нуля, корней нет
    return [];
  } else if (discriminant === 0) {
    // Если дискриминант равен нулю, один корень
    const root = -b / (2 * a);
    return [root];
  } else {
    // Если дискриминант больше нуля, два корня
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }
}
// Пример использования
const a = 1;
const b = -3;
const c = 2;

const result = solveEquation(a, b, c);
console.log("Корни уравнения:", result);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  // Преобразование процентной ставки
  percent = percent / 100 / 12;

  // Расчет тела кредита
  const loanBody = amount - contribution;

  // Расчет ежемесячного платежа
  const monthlyPayment =
    loanBody *
    (percent + percent / (Math.pow(1 + percent, countMonths) - 1));

  // Расчет общей суммы к возврату клиенту
  const totalAmount = monthlyPayment * countMonths;

  // Округление результата до двух знаков после запятой
  const roundedTotalAmount = Math.round(totalAmount * 100) / 100;

  return roundedTotalAmount;
}
// Примеры использования
console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52