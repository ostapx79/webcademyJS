### Арифметические операции над переменными
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