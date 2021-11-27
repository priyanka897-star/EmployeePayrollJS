
//UC1:
const IS_ABSENT = 0;

let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee is Absent");
}
else {
    console.log("Epmloyee is Present");
}

// UC2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
empCheck = Math.floor(Math.random() * 10) % 3;
switch (empCheck) {
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    case IS_PART_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage:" + empWage);

//UC-3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        default:
            return 0;
    }
}
empCheck = Math.floor(Math.random() * 10) % 3;
empHrs = getWorkingHours(empCheck);
empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage:" + empWage);

//UC-4
empHrs = 0;
const NUM_OF_WORKING_DAYS = 20;
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}
empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Wage:" + empWage);

//UC5
const MAX_HRS_IN_MONTH = 100;
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < MAX_HRS_IN_MONTH) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empCheck = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total Days:" + totalWorkingDays + "Total Hrs: " + totalEmpHrs + "Employee Wage:" + empCheck);

//UC6
function calDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = new Array();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(calDailyWage(empHrs));
}

empWage = calDailyWage(totalEmpHrs);
console.log(empDailyWageArr);
console.log("Total Days" + totalWorkingDays + "Total Hrs:" + totalEmpHrs + "Emp Wage" + empWage);

//UC7
//Uc-7A
let totalEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " Emp Wage : " + totalEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log(" Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC7
//UC7-A
let totslEmpWage = 0;
function sum(dailyWage) {
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Days : " + totalWorkingDays + "Total Hrs : " + totalEmpHrs + "Emp wage : " + totalEmpWage);
function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}
console.log("Emp Wage with reduce: " + empDailyWageArr.reduce(totalWages, 0));

//UC7 -B
let dailyCntr = 0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + "=" + dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log(mapDayWithWageArr);

//Uc-7C
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("Uc7C-Daily Wage Filter when Fulltime Earned");
console.log(fullDayWageArr);

//Uc-7D
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Uc7D - First time Fulltime wage was earned on Day: " + mapDayWithWageArr.find(findFullTimeWage));

//Uc-7E
function isAllFulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
console.log("Uc7E- Check all element have Full Time Wage: " + fullDayWageArr.every(isAllFulltimeWage));

//Uc-7F
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Uc7F-Check If Any PartTime Wage : " + mapDayWithWageArr.some(isAnyPartTimeWage));

//Uc-7G
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0)
        return numOfDays + 1;
    return numOfDays;
}
console.log("Uc7G- Number od days Emp Worked : " + empDailyWageArr.reduce(totalDaysWorked, 0));

//UC-8
totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArray.push(calDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays, calDailyWage(empHrs));
}
console.log(empDailyWageMap);
console.log("Emp Wage Map totalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalWages, 0));

//UC9

//UC 9 Arrow function
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;
const empDailyHrsMap = new Map();
let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0)
console.log("UC 9A Employee wage with arrow: Total Hours: " + totalHours + " Total Wages " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) fullWorkingDays.push(key);
    else if (value == 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Non Working Days " + nonWorkingDays);
console.log("Part Working Days " + partWorkingDays);
console.log("Full Working Days " + fullWorkingDays);

//UC10
//UC 10 Object Creation

totalEmpHrs = 0;
let totalWorkingdays = 0;
let empDailyHrsAndWageArr = new Array();
while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingdays <= NUM_OF_WORKING_DAYS) {
    totalWorkingdays++;
    empCheck = Math.floor((Math.random() * 10) % 3);
    const empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingdays,
        dailyHours: empHrs,
        dailyWage: calDailyWage(empHrs),
        toString() {
            return '\nDay ' + this.dayNum + ' => working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
        }
    });
}
console.log("UC 10 Showing daily hours worked and wage earned: " + empDailyHrsAndWageArr);

//UC 11 Object operation using Arrow function
let totalWagess = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage += dailyHrsAndWage.dailyWage, 0);
let TotalHours = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours += dailyHrsAndWage.dailyHours, 0);
console.log("UC 11A Total hours " + TotalHours + " Total Wages : " + totalWagess);

console.log("UC 11B Loggin full working days");
empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 8).
    forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

let partWorkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 4).
    forEach(dailyHrsAndWage => dailyHrsAndWage.toString());
//UC11C
console.log("\nUC 11C part time working string " + partWorkingDayStrArr);

let nonworkingDayStrArr = empDailyHrsAndWageArr.filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours == 0)
    .forEach(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("\nUC 11D No working days " + nonworkingDayStrArr);

// Refactored UC11 Employee Wage With Class


class EmployeePayrollData {
    //property
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    //getter and setter
    get name() { return this._name; }
    set name(name) { 
        let nameRegex = new RegExp("^[A-Z]{1}[a-z]{3,}$");
        if(nameRegex.test(name)){
            this._name = name;
        }
        else{
            throw "Name is incorrect format";
        }
    }
   //method
   toString(){
    const option = { year: 'numeric', month : 'long', day : 'numeric'};
    const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US",option);
    return "id ="+this.id+", name = "+this.name+", salary = "+this.salary+", gender = "+this.gender+", startDate "+empDate;
}
}
let employeePayrollData = new EmployeePayrollData(1, "Priyanka", 50000,"Female",new Date());
console.log(employeePayrollData.toString());
employeePayrollData.name = "Neha";
console.log(employeePayrollData.toString());
let newemployeePayrollData = new EmployeePayrollData(2,"Terissa",70000,"Female",new Date());
console.log(newemployeePayrollData.toString());







