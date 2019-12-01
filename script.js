let money = prompt("Ваш бюджет на месяц?");
let timeDate = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    money,
    timeDate,
    expenses: {},
    optionalExpenses: 0,
    income: [],
    savings: false
}
optionalExpenses = prompt("Введите обязательную статью расходов в этом месяце");
income = prompt("Во сколько обойдется?");
expenses: {
    optionalExpenses,
    income
}

alert("Бюджет на 1 день равен: " + appData.money / 30);