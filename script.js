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

let i = 0;
while (i < 2){
    let a1 = +prompt("Введите обязательную статью расходов в этом месяце"),
    a2 = +prompt("Во сколько обойдется?");
    if (typeof(a1) != "number" || typeof(a2) != "number"){
        console.log("error");
    } else{

    
    if (a1 == '' || a2 == '' ){
        console.log("error not ''");
    } else {
    i++;
    }
    }
}

alert("Бюджет на 1 день равен: " + appData.money / 30);