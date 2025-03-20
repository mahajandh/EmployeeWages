const IS_ABSENT=0
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT){
    console.log("Employee is Absent");
    return ;
}
else {
    console.log("Employee is Present");
}

//Uc2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
let empHrs =0;
empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck){
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage"+empWage);

//UC3

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
empHrs = getWorkingHours(empCheck);
empWage=empHrs*WAGE_PER_HOUR;
console.log("Emp Wage: "+empWage);

//uc4

const NUM_OF_WORKING_DAYS =20;
empHrs =0;
for(let day=0; day<NUM_OF_WORKING_DAYS; day++){
    let empCheck=Math.floor(Math.random() *10) %3;
    empHrs +=getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + "Emp Wage: "+ empWage);    

// UC 5
const MAX_HRS_IN_MONTH= 160;
let totalEmpHrs =0;
let totalWorkingDays =0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck) ;
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 — Total Days: "+ totalWorkingDays +" Total Hrs: "+ 
    totalEmpHrs + " Emp Wage: "+ empWage) ;

// UC 6 Arrays
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}
totalEmpHrs =0;
totalWorkingDays =0;
let empDailyWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH &&
    totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math. floor (Math. random() * 10)%3;
    let empHrs = getWorkingHours(empCheck) ;
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs));
}   
empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 — Total Days: "+ totalWorkingDays +" Total Hrs: " + totalEmpHrs +
     " Emp Wage: "+ empWage) ;
     // UC 9 Arrow Functions
totalEmpHrs=0;
totalWorkingDays=0;
let empDailyHrsMap = new Map();
while(totalEmpHrs <=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math. floor (Math. random() * 10)%3;
    let empHrs = getWorkingHours(empCheck);
    empDailyHrsMap.set(totalWorkingDays, empHrs);
}
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}
let count =0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
    console.log("UC9A — Emp Wage with Arrow. : "+ " Total Hours: "+ totalHours +
    " Total Wages: "+ totalSalary);
    console.log("Emp Hrs Map: ");
    console.log(empDailyHrsMap)
    let nonWorkingDays = new Array();
    let partWorkingDays = new Array();
    let fullWorkingDays = new Array();
    empDailyHrsMap.forEach((value, key, map) =>{
        if (value==8) fullWorkingDays.push(key);
        else if (value==4) partWorkingDays.push(key);
        else nonWorkingDays.push(key) ;
    });
    console.log("Full Working Days: "+fullWorkingDays);
    console.log("Part Working Days: "+partWorkingDays);
    console.log("Non Working Days: "+nonWorkingDays);