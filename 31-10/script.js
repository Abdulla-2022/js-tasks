let userSalaries = {
    Ella: 2000,
    Sophia: 3000,
    Ellie: 1000,
}
console.log(userSalaries.Ella);
console.log(userSalaries.Ellie);
/****** 2 ******/
let sum = {
    a:5,
    b:6,
    c:10
}
let summ = 0;
for(let key in sum){
    summ += sum[key]
}
console.log(summ);

/****** 3 ******/
let data;
let number;
number = data ? 3:5;
console.log(number);
