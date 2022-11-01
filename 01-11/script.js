const summ = [1,2,5,6,88,5];
let result = 0;
for(let index in summ){
    result += summ[index];
}
console.log(result);

const mass = [1,2,3,4,5,6,7,8,9,10];
let result1 = 0;
for(let key in mass){
    result1 += (mass[key] * mass[key]);
}
console.log(result1);

const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const x = [];
for(let i = 2; i <= 20; i++){
    if(i % 2 === 0){
        x.push(i);
    }
}
console.log(x);
