// Задача 1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
  
    get state() {
      return this._state;
    }
  
    fix() {
      this.state *= 1.5;
    }
  }
  
  // Пример использования
  const sherlock = new PrintEditionItem(
    "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
    2019,
    1008
  );
  
  console.log(sherlock.releaseDate); // 2019
  console.log(sherlock.state); // 100
  sherlock.fix();
  console.log(sherlock.state); // 100

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
 
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "novel";
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "fantastic";
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(author, name, releaseDate, pagesCount);
      this.type = "detective";
    }
  }

// Задача 2
class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
        console.log(`Книга "${book.name}" добавлена в библиотеку.`);
      } else {
        console.log(`Книга "${book.name}" не может быть добавлена из-за плохого состояния.`);
      }
    }
  
    findBookBy(type, value) {
      const foundBook = this.books.find(book => book[type] === value);
      return foundBook || null;
    }
  
    giveBookByName(bookName) {
      const index = this.books.findIndex(book => book.name === bookName);
  
      if (index !== -1) {
        const bookToGive = this.books.splice(index, 1)[0];
        console.log(`Книга "${bookToGive.name}" выдана читателю.`);
        return bookToGive;
      } else {
        console.log(`Книга "${bookName}" не найдена в библиотеке.`);
        return null;
      }
    }
  }
  
  // Тестовый сценарий
  const library = new Library("Библиотека имени Ленина");
  
  library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
  );
  library.addBook(
    new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168)
  );
  library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
  library.addBook(new Magazine("Мурзилка", 1924, 60));
  
  console.log(library.findBookBy("name", "Властелин колец")); // null
  console.log(library.findBookBy("releaseDate", 1924).name); // "Мурзилка"
  
  console.log("Количество книг до выдачи: " + library.books.length); // Количество книг до выдачи: 4
  library.giveBookByName("Машина времени");
  console.log("Количество книг после выдачи: " + library.books.length); // Количество книг после выдачи: 3

// Задача 3
class Student {
    constructor(name) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (!this.marks[subject]) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
        console.log(`Оценка ${mark} по предмету ${subject} добавлена.`);
      } else {
        console.log(`Оценка ${mark} не может быть добавлена. Допустимы значения от 2 до 5.`);
      }
    }
  
    getAverageBySubject(subject) {
      const subjectMarks = this.marks[subject];
  
      if (!subjectMarks || subjectMarks.length === 0) {
        console.log(`Нет оценок по предмету ${subject}.`);
        return 0;
      }
  
      const sum = subjectMarks.reduce((acc, mark) => acc + mark, 0);
      const average = sum / subjectMarks.length;
      console.log(`Средний балл по предмету ${subject}: ${average.toFixed(2)}`);
      return average;
    }
  
    getAverage() {
      const allSubjects = Object.keys(this.marks);
  
      if (allSubjects.length === 0) {
        console.log("Нет оценок.");
        return 0;
      }
  
      const totalAverage = allSubjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0);
      const overallAverage = totalAverage / allSubjects.length;
      console.log(`Общий средний балл: ${overallAverage.toFixed(2)}`);
      return overallAverage;
    }
  }
  
  // Пример использования
  const student = new Student("Олег Никифоров");
  student.addMark(5, "химия");
  student.addMark(5, "химия");
  student.addMark(5, "физика");
  student.addMark(4, "физика");
  student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
  student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
  student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
  student.getAverage(); // Средний балл по всем предметам 4.75
  