// Задача 1

function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
  
    if (isNaN(parsedValue)) {
      throw new Error("Невалидное значение");
    }
  
    return parsedValue;
  }
  
  function validateCount(value) {
    try {
      return parseCount(value);
    } catch (error) {
      return error;
    }
  }
  
  // Пример использования
  try {
    const result = validateCount("42.5");
    console.log(result); // Если ввод корректен, то выведет число 42.5
  } catch (error) {
    console.error(error.message); // Если ввод невалиден, выведет сообщение об ошибке
  }
//  Задача 2
 
class Triangle {
    constructor(a, b, c) {
      if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Треугольник с такими сторонами не существует");
      }
  
      this._perimeter = a + b + c;
      this._area = this.calculateArea(a, b, c);
    }
  
    get perimeter() {
      return this._perimeter;
    }
  
    get area() {
      return this._area;
    }
  
    calculateArea(a, b, c) {
      const semiPerimeter = this.perimeter / 2;
      return +Math.sqrt(
        semiPerimeter * (semiPerimeter - a) * (semiPerimeter - b) * (semiPerimeter - c)
      ).toFixed(3);
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (error) {
      return {
        get area() {
          return 'Ошибка! Треугольник не существует';
        },
        get perimeter() {
          return 'Ошибка! Треугольник не существует';
        },
      };
    }
  }
  
  // Пример использования
  const triangle1 = getTriangle(3, 4, 5);
  console.log(triangle1.perimeter); // 12
  console.log(triangle1.area); // 6
  
  const triangle2 = getTriangle(1, 1, 3);
  console.log(triangle2.perimeter); // "Ошибка! Треугольник не существует"
  console.log(triangle2.area); // "Ошибка! Треугольник не существует"
  