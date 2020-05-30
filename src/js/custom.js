const form = document.forms['arithmeticMean'];
const addField = form.querySelector('.js-add-field');
const dinamicInputs = form.querySelector('.js-dinamic-inputs');
const calculate = form.querySelector('.js-submit');
const deleteInput = form.querySelector('.js-dinamic-inputs');
const resultDiv = form.querySelector('#result');
const allInputs = form.querySelectorAll('input');

console.log(allInputs)

form.addEventListener('submit', function(event){
    event.preventDefault();
    getAllInputs()
    // find_average();
});

addField.addEventListener('click', function() {
    addInput();
});

deleteInput.addEventListener('click', function() {
    removeInput();
});

function getAllInputs(element) {
    allInputs.forEach(function(item){
        let itemArr = Number( (item.value) );
        console.log(itemArr);
    });
}

function addInput(input) {
    const div = document.createElement('div');
    const el = document.createElement('input');
    const delIcon = document.createElement('a');
    delIcon.className = 'remove-item dinamic-inputs__remove';
    delIcon.innerHTML = '<i class="fas fa-trash"></i>'
    div.className = 'dinamic-inputs__el';
    el.type = 'text';
    div.appendChild(el);
    div.appendChild(delIcon);
    dinamicInputs.appendChild(div);
}

function removeInput(e) {
    console.log(e.target)
    // if ( e.target.parentElement.classList.contains('remove-item') ) {
    //     e.target.parentElement.parentElement.remove();
    // }
}

function find_average(array) {
    let arrayLength = array.length;
    let count = 0;
    let result;
    array.forEach(function(item, i){
    count += item;
    });
    result = Math.ceil(count / arrayLength);
    resultDiv.innerHTML(result);
    return result;
}
// let res = find_average([5000,5950,5100,5500,4900,6050,5299,5600,6500]);
// console.log(res);
