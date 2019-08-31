//let message= 'Hello Javascript!'
//alert('Hello Javascript');//виводить повідомлення

let message = 'Hello Javascript';// let - стала величина можга змінити
alert(message);
message = 'Nice to see you';
alert(message);

const userAge = parseInt(prompt('Enter your age')); // додати + для того щоб ф-ція прочитала цифру а не речення
alert('Your age is ' + userAge);

const nextAge = addOne(userAge);
alert('Next year you will be ' + nextAge);

if (userAge >= 18 && userAge <65) {
    alert('You are adult');
} else if (userAge >=65) {
    alert('You are retired');
} else {
    alert('You are kid');
}

function addOne(value){
    const newValue = value + 1;//const - робить сталу величину яку змінити потім не можга
    return newValue;
}
