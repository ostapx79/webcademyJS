var mark = 4;

switch (mark) {
    case 5:
        console.log("Отлично! Хорошая работа!");
        break;
    case 4:
        console.log("Хороший результат!");
        break;
    case 3:
        console.log("Можно было и лучше!");
        break;
    default:
        console.log("Такой оценки не существует!");
}

var number = 100;
switch (true) {
    case number > 18 && number < 30:
        console.log("number > 18 и < 30");
        break;
    case number > 50 && number < 70:
        console.log("number > 50 и < 70");
        break;
    default:
        console.log("default value");
}

