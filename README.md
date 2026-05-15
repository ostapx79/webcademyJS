# webcademyJS

### Учим JavaScript от webcademy.ru

## Первая неделя курса

### Материалы для подготовки. Основы JS.
#### 15 уроков.
### 01 Вводное приветствие.
### 02 Где писать код JavaScript?
Писать код JavaScript можно в html файле, внутрь тэга <script></script>, и в файле JavaScript c расширением .js
```html
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Где писать код JavaScript?</title>
</head>

<body>
   <!-- где пишется код javascript -->
   <script>
      alert("Привет мир, это JavaScript! Код из файла index.html")
   </script>
   <script src="./js/script.js"></script>
</body>

</html>
```
или
```javascript
// файл javascript script.js
alert("Привет мир, это JavaScript, код из файла script.js")
```
### 03 JavaScript команды alert() и console.log()
```javascript
// в браузер появляется окошко с сообщением
alert("Тексе для вывода на экран.");
// console.log() выводит сообщение в консоль
console.log("Привет, консоль!");
```
### 04 Отладка программы с помощью console.log()
```javascript
var age = 18;

if (age >= 18) {
   // console.log помогает отладить программу
   console.log("Вы можете сдать на права!");
} else {
   // console.log помогает отладить программу
   console.log("Воспользуйтесь такси.");
}
```
### 05 Переменные в JavaScript
```javascript
// файл javascript script.js
// Переменные в JavaScrip
// В javascript переменные определяется с ключевого слово var, let или const,

// переменная типа Integer
var x = 5; // целое число
// var(это ключевое слово переменой) x(имя переменной)
// =(с оператором = присваивается) 5(числовое значение, цифра 5);

// переменная типа String
var text = "Привет, это строковая переменная."; // строка

// переменная типа Boolean
var logicTrue = true; // Правда, 1
var logicFalse = false; // Ложь, 0

// вывод на консоль переменные выше описанные
console.log(x);
console.log(text);
console.log(logicTrue);
console.log(logicFalse);
```
### 06 Арифметические операции над переменными
```javascript
// арифметические операции над переменными
// переменная x cо значением 5
var x = 5;
// вторая переменная y со значением 20
var y = 20;
// создаем переменную по имение result для сохранение результата
var result;

// сохраняем результат в переменную result
// оператор +, складывает две переменные и сохраняется в переменную result
result = x + y;
console.log(result);
// оператор -, высчитывает первую переменную на вторую переменную и
// сохраняем в переменную result
result = x - y;
console.log(result);
// оператор *, умножим первую переменную на вторую переменную и
// сохраняем в переменную result
result = x * y;
console.log(result);
// оператор /, делим первую переменную на вторую переменную и
// сохраняем в переменную result
result = x / y;
console.log(result);

var i = 10;

// i++
// ++i
// i--
// --i

console.log(i++);
console.log(i);

// конкатенация строк
var a = "Hello, ";
var b = "world!"
// склеиваем две строки с помощью оператора +
var concatString = a + b;
// результат склеивание двух строк
console.log(concatString);
// или сокращено
console.log(a + b);

// складываем две булевые переменные
var firstBool = true;
var secondBool = true;
// результат будет 2
console.log(firstBool + secondBool)
```
### 07 Условия в JavaScript
```javascript
// Условия в javascript

// объявляем переменную по имени a
var a = 12;

if (a > 10) {
   // вывод результата на консоль
   console.log("а больше 12");
} else if (a == 10) {
   // вывод результата на консоль
   console.log("а равно 10");
} else {
   // вывод результата на консоль
   console.log("а меньше 12");
}

// записываем возраст в переменную по имени age
var age = 15;

// если возраст меньше чем 18 или возраст больше чем 60
if (age < 18 || age > 60) {
   // выводим на консоль
   console.log("Вам меньше 18, или больше.")
}
```
### 08 Конструкций Switch Case
### 09 Массивы в JavaScript
### 10 Обход массива методом for each в JavaScript
### 11 Цикл for в JavaScript
### 12 Обход массива циклом for в JavaScript
### 13 Функции в JavaScript
### 14 Объекты в JavaScript
### 15 Команды alert, confirm и prompt в JavaScript
##### "в каждой директории с уроком, буду добавлять .md файл с js кодом, для понимания что делается в уроке"

### Материалы для подготовки. Рекомендованная литература
###### Рекомендованная литература.
### 01 Книга. Рекомендуется к ознакомлению
![Изображение](https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/8713ab941e64b60f2f83549e760566f7.jpg/s/s1200x/a/17633/sc/22 "Логотип Книги")
#### Джон Дакетт Javascript и jQuery. Интерактивная веб-разработка.
### Дополнительная литература
#### 01 книга
![Изображение](https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/1a71c6f75b211c25af0d5b862e564d00.jpg/s/s1200x/a/17633/sc/127 "Логотип Книги")
#### Дэвид Флэнаган -  JavaScript.
#### 02 книга
![Изображение](https://fs-thb03.getcourse.ru/fileservice/file/thumbnail/h/729d77b30ab5e33784f8bca3be9859e3.jpg/s/s1200x/a/17633/sc/212 "Логотип Книги")
#### Выразительный JavaScript.
#### 03 книга
![Изображение](https://fs-thb01.getcourse.ru/fileservice/file/thumbnail/h/f443df94bfb51a15d1f918ca36c23090.jpg/s/s1200x/a/17633/sc/186 "Логотип Книги")
#### Морган Н. JavaScript для детей.

### Редактор кода Visual studio code
#### 3 урока.