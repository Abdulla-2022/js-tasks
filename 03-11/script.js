/******** 1 *********/
const example = [1,2,3,4,5];
const result = example.map(item => item * 2);
console.log(result);




/******** 2 *********/

const mass = [];
const mass_func = function (elem, length) {
    for (let i = 0; i < length; i++){
        mass[i] = elem;
    }
    return mass;
}
mass_func('a',5);


/******** 3 *********/
const data = [1,2,3];
const data_func = () => {
    const data2 = [];
    for (let i = data.length - 1; i>=0; i--){
        data2.push(data[i]);
    }
    return data2;
}
console.log(data_func(data));



































