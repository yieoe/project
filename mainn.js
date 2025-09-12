

/*let name = "alexey";
const age = 20;

const numbers = [1, 2, 3];
numbers.push(4);
console.log(name);
console.log(age);
console.log(numbers);
 
let nam = 5;
let nam2 = 15;
let res = nam + nam2;
console.log(nam + nam2);
console.log(nam2/nam);
console.log(nam * nam2);
let num3 = 6;
num3++;
console.log(num3);
num3--;
console.log(num3);
console.log("результат" + (nam2 - nam));
console.log(nam < nam2);
console.log("сложение" + res);
  
let str_1 = Number("12");
let str_2 = Number("2");
console.log("результат:" + (str_1 + str_2));



let number = 5;
let number_1 = 15;
if (number < 15) { 
    console.log("да епта верно");
} else {
    console.log("нет,не верно");
} let namber0 = 20;
let namber1 = 25;
if ( namber0 + namber1 < number * number_1) {
    console.log( "да оно же меньше!");
}else{
    console.log("не, оно больше");
}


if (namber0 > number_1){
console.log("первая больше");
} else{
    console.log("нет");
}
if(namber1 > namber0) {
    console.log("оно больше");
}
if( (namber0 + number) == namber1){
    console.log("oни равны");
}


if(number_1 <16){
    console.log("ребeнок");
} else if(number_1 <= 20){
    console.log("подросток");
} else {
    console.log("проходи");
}*/


/*const btn = document.getElementById("myButton");
btn.addEventListener("click", function() {
    let a = 5;
    let b = 10;
    console.log(a + b);
}); */


/*let namber = 5;
let namber2 = 10;
console.log(namber + namber2);
console.log(namber - namber2);
console.log(namber2 - namber);
console.log(namber2 * namber);
console.log(namber * namber );
console.log(namber2 / namber);
console.log(namber/ namber2);
console.log("это строка: " +(namber + namber2));

if(namber == namber2){
    console.log("хуйня");
} else{
    console.log("не хуйня");
}
if(namber > namber2){
    console.log("больше");
} else if(namber > namber2){
    console.log("не больше");
} else{
    console.log("вообще не больше");
}

let number = 9;
let isHasHose = true;
if(number === 15 && isHasHose == true)   {
    console.log("ok");
} else if(number < 10){
    console.log("no ok");   
} else if(number > 15){
    console.log("ok!");
}else if(number >= 15){
    console.log("okk");
}else{
    console.log("nnnno");
} 

    
const button = document.querySelector('.button');
let clickCount = 0;
const conteiner = document.getElementById('conteiner');
button.addEventListener('click', function(){
clickCount++
console.log(clickCount);

switch(clickCount){
    case 1:
        console.log('dont click');
        document.body.style.backgroundColor = 'red';
        break;
        
        case 2:
        console.log('DonT cLiCk');
        document.body.style.backgroundColor = 'black';
        break;
        
        case 3:
            console.log('не жми');
            document.body.style.backgroundColor = 'white';
            break;
            
        case 4:
            alert('а если так');
            button.style.backgroundColor = 'red';
            document.body.style.backgroundColor = 'Pink';
            break;
        
        case 5:
            alert('я уже синий');
            button.style.backgroundColor = "blue";
            break;

        case 6:
            button.style.opacity = '0';
             setTimeout(function(){ button.style.opacity = '1'; 
                alert('ОПА И НЕТУ'); },1000);
                break;
        case 7:
            const conteiner = document.querySelector('.conteinen');
            const p = document.createElement('p');
            p.innerText = 'я могу и так :)';
            p.style.textAlign = 'center';
            p.style.fontSize = '50px';
            
           

            conteiner.appendChild(p);
            break;
        case 8:
            const img = document.createElement('img');
            img.src = "c:\Users\Елена\Pictures\Новая папка\fireball-clipart-pixel-6.png";
            img.alt = 'огонь';
            conteiner.appendChild(img);
            break;
            default: console.log('error');

};
    

});
   


    
/*console.log(14 % 4);
console.log('\\ \\ \\\\ \\\ \'"');
console.log('- Are you hungry? \n - Aaaarrrgh!');
console.log('Kings' + 'wood');
console.log(4 + ' члена');
console.log("Say \"Hello\"");
console.log("Who's to blame?'");
console.log('- Did Joffrey agree?\n - He did. He also said "I love using \\n"');

let who = 'dragon\'s' + ' mother';
console.log(who);

let dollarsPerEuro = 1.25;
let rublesPerDollar = 60;

let dollarsCount = 50 * dollarsPerEuro; // 62.5
let rublesCount = dollarsCount * rublesPerDollar; // 3750

console.log(rublesCount);
console.log(` - are you hangry?
 - aaaargh!`);
let n = "\nyon";

console.log(`Do you want to eath, ${name}?`);


const length = (str) => str.length;
const neme = 'jobb'
console.log(length(neme));
let firstName = '  Grigor   \n';

console.log(firstName.trim());
const showGreeting = () => {
    const text = "Hello Hecslet!";
    console.log(text);

} 
showGreeting();
const printMotto = () =>{
const text = "Winter is coming";
console. log(text);
return(text);
}
console.log(printMotto());
const sum = (a, b) => {
  const s = a + b;
  return s;
  
};
console.log(sum(5 , 10));

const capitalize = (text) =>{
    const bigText = text[0].toUpperCase();
    const reneit = text.slice(1);
    return bigText + reneit;
}; console.log(capitalize('woww'));

 
const button = document.querySelector('.button');
const clickCount = addEventListener('click', function(){

for ( let i = 1; i < 20; i++) {
   setTimeout(() =>{
    console.log(i);
    if(i === 19) {
        alert('ваш член достиг 19см!');
    }
    
},i * 250)
}}); 

'use strict'
const sumEvenNambers = (start, finish) =>{
    let result = 0;
    for(let i = start; i<=finish; i++){
        if(i % 2 ===0){
            result += i;
        }
    }; return result;
}; console.log(sumEvenNambers(1,100));

const personCat = {
    cat: 'Барсик',
    age: 10,
    color: 'black',
    meow: function() {
        console.log(`кот ${this.cat} говорит мяу`);
    } 
}; personCat.meow()

const car = {
    model: 'tayota',
    color: 'red',
    age: 1990,
    honk: function(){
        console.log(`авто ${this.color} цвета, модели ${this.model}, ${this.age} года, проехало мимо`);
    
    }
}; car.honk()

const dog ={
    name: 'pop',
    breed: 'tacsa',
    age: 5,
    sound: 'wowowowow',
    barck: function(){
        console.log(`собака по имени ${this.name}
            породы ${this.breed}
            возрастом ${this.age} лет
            говорит ${this.sound}`);
    }
}; dog.barck();
let sum = 0;
for(let i = 1; i<= 10000; i++){
    if(i % 2 ===0){
        sum += i
    }
}; 
    
const person = {
    name: 'alex',
    age: 20,
    height: 180,
} */

