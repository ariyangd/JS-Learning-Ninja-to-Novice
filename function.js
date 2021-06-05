// function greet(){
//     console.log('Hi');
// }

// const speak =  function(){
//     console.log('Good Day');
// } 


// greet();
// speak();



// const speak =  function(name){
//     console.log(`name ${name}`); 
// } 

// speak('mario');


// const calArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;  
// }

// const area = calArea(5);
// console.log(area);





// const calArea = (radius) => 3.14 * radius**2;

// const area = calArea(5);
// console.log(area);



// const greet = (string) => 'hello';

// console.log(greet()); 


// const bill = function(product, tax){
//     let total =0;
//     for(let  i = 0; i<product.length; i++){
//         total += product[i]+product[i]*tax;
        
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));


// const bill = (product,tax) =>{
//     let total = 0; 
//     for(let  i = 0; i<product.length; i++){
//         total += product[i]+product[i]*tax;
//     }
//     return total;
// }
// console.log(bill([10,15,30],0.2));




// const name = 'Ariyan';

// //function

// const greet = () => 'Hello';

// let result = greet();
// console.log(result);

// //method

// let result2 = name.toUpperCase();
// console.log(result2);  



// //call back

// const myFunc = (callBackFunc) =>{
//     let value = 50;
//     callBackFunc(value);
// }

// myFunc  (value => {
//     console.log(value);
// });



// //foreach

// let people = ['ariyan', 'mumit', 'rakib', 'saju', 'mithun'];

// const logPerson = (person, index) =>{
//     console.log(`${index} - Hello ${person }`)
// };

// people.forEach(logPerson);



//callback
const ul = document.querySelector('.people');

const people = ['ariyan', 'mumit', 'rakib', 'saju', 'mithun'];

let html = ``;

 people.forEach (function(person){
    html += `<li style = " color: red " >${person}</li>`;
 });

 console.log(html); 
 ul.innerHTML = html;