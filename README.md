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
### 07 Условия в JavaScript
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

### Редактор кода Visual studio code
#### 3 урока.