//First exercise
const table = () => {
    const timetable = {};
    let end = false;
    do {
        time = prompt("Укажите время: ");
        action = prompt("Укажите действие: ");
        if ((time == null) || (action == null) || !time || !action) {
            end = true
        } else {
            timetable[time] = action;
        }
        
        
    } while (!end)

    return timetable
}    
const timeTable = table();
console.log(timeTable);


//Second exercise

const salaries = {
  John: "4300.00",
  Ann: "5700.40",
  Pete: "4900.95",
};

const getSalariesTotal = (salaries) => {
    let total = 0;
    for (let employer in salaries) {
        total += Math.round(salaries[employer]); // Якщо працюємо з цілими числами, якщо ні - ставим просто Number
    };
    return total;
};

const totalResult = getSalariesTotal(salaries);
console.log(`totalResult`, totalResult);