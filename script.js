'use strict'

let money,time,depo_dialog,DayBudget;
function StartQuestions (){
    money = +prompt ("Ваш бюджет на месяц?", "20000");
    if(isNaN(money) || money == "null" || money == ""){
        StartQuestions(); 
    } else{
        time = +prompt ("Введите дату в формате YYYY MM DD", "20191206");
        if (isNaN(time) || time == "null" || time == ""){
            StartQuestions();
        }
        
    }
}

// StartQuestions();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};



// console.log(appData.budget, appData.timeData);   
function deposit(){
    if (appData.savings == false){
        depo_dialog = confirm ("У Вас нет депозита, желаете ли открыть его?", "");
    }
    if (depo_dialog){
        let Percent = +prompt("Отлично! Теперь укажите под какой процент Вы хотите взять депозит (от 5 до 20 в месяц)", "20");
        if (isNaN(Percent) || Percent < 5 || Percent > 20 || Percent == ""){
            deposit();
        } else{
            let sum = appData.budget / 100 * Percent + appData.budget; // budget + Percent of deposit
            alert("Отлично! Ровно через 30 дней Ваш буджет будет: " + sum, "");
        }

        
    } else{
        console.log("false");
    }
    
}
// deposit();

function detectDayBudget(){
    DayBudget = appData.budget / 30;
    alert("Ваш дневной бюджет равен: ~" + Math.round(DayBudget) + " рублей.");
}
// detectDayBudget();

function detectLevel(){
    if (DayBudget <= 250){
        alert("Низкий уровень дохода!");
    }else if(DayBudget <= 1500){
        alert("Средний уровень дохода!");
    } else if(DayBudget > 1500){
        alert("Доход выше среднего уровня!");
    }
}
// detectLevel();

function chooseOptExpenses(){
    for(let i = 0; i < 3; i++){
        let QuestExpensions = prompt("Статья необязательных расходов?", "10000");
        appData.optionalExpenses[i] = QuestExpensions;
    }
}
// chooseOptExpenses()


// for (let i = 0; i < 2; i++) {
//     let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt ("Во сколько обойдется?", "");

//     if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

//         console.log ("done");

//         appData.expenses[a] = b;
//     } else {                            
//         console.log ("bad result");
//         i--;
//     }

// };

// appData.moneyPerDay = appData.budget / 30;


// alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");


// if (appData.moneyPerDay < 100) {
//     console.log ("Это минимальный уровень достатка!");
// } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//     console.log ("Это средний уровень достатка!");
// } else if (appData.moneyPerDay > 2000) {
//     console.log ("Это высокий уровень достатка!");
// } else {
//     console.log ("Произошла ошибка");
// }