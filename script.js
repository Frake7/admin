'use strict'

// StartQuestions();
let money,time,depo_dialog,DayBudget;
let appData = {
    timeData: time,
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
    StartQuestions: function(){
        money = +prompt ("Ваш бюджет на месяц?", "20000");
        if(isNaN(money) || money == "null" || money == ""){
            appData.StartQuestions(); 
        } else{
            time = +prompt ("Введите дату в формате YYYY MM DD", "20191206");
            if (isNaN(time) || time == "null" || time == ""){
                appData.StartQuestions();
            }
            
        }
    },
    deposit: function(){
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
    },
    detectDayBudget: function(){
        DayBudget = money / 30;
        alert("Ваш дневной бюджет равен: ~" + Math.round(DayBudget) + " рублей.");
    },
    detectLevel: function(){
        if (DayBudget <= 250){
            alert("Низкий уровень дохода!");
        }else if(DayBudget <= 1500){
            alert("Средний уровень дохода!");
        } else if(DayBudget > 1500){
            alert("Доход выше среднего уровня!");
        }
    },
    chooseOptExpenses: function(){
        for(let i = 0; i < 3; i++){
            let QuestExpensions = prompt("Статья необязательных расходов?", "10000");
            appData.optionalExpenses[i] = QuestExpensions;
        }
    },
    chooseIncome: function(){
        let incometest = prompt("Введите дополнительный доход. (через запятую)", 'Подработка, чаевые, фриланс');
        if( incometest == "" || incometest == null ) {
            appData.chooseIncome();
        }
        appData.income = incometest.split(',');
        for(let key in appData.income){
            console.log(appData.income[key]);
        }
        
    }
};

appData.StartQuestions();
appData.detectDayBudget();
appData.chooseIncome();


// console.log(appData.budget, appData.timeData);   

// deposit();
// detectDayBudget();

// detectLevel();

// chooseOptExpenses()
