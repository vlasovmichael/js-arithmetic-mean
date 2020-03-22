function find_average(array) {
    let arrayLength = array.length;
    let count = 0;
    let result;
    array.forEach(function(item, i){
    count += item;
    });
    result = Math.ceil(count / arrayLength);
    return result;
}
let res = find_average([5000,5950,5100,5500,4900,6050,5299,5600,6500]);
console.log(res);