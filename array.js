// const score = [10,30,15,25,40,50,5];


////Filter

// const filteredScore = score.filter((score) =>{
//     return score > 20;
// });

// console.log(filteredScore);


// const users = [
//     {name: 'Aiyan', premium: true},
//     {name: 'Rakib', premium: false},
//     {name: 'Mumit', premium: false},
//     {name: 'Asad', premium: true},
// ];

// const premiumUsers = users.filter(user=> user.premium);

// console.log(premiumUsers);

////map
// const price = [10,30,15,25,40,50,5];

// const salePrice = price.map( (price)=> price / 2);

// console.log(salePrice);

// const products = [
//     {name: 'gold star', price: 20},
//     {name: 'mashroom', price: 40},
//     {name: 'green shells', price: 30},
//     {name: 'banana skin', price: 10},
//     {name: 'red shells', price: 50}
// ];

// const halfPrice = products.map((product)=> product.price/2);
// console.log(halfPrice);

// const saleProducts = products.map(product =>{
//     if (product.price > 30){
//         return{name: product.name, price: product.price /2};
//     }else{
//         return product;
//     }
// });
// console.log(saleProducts, products);


////Reduce

// const scores = [10,20,60,40,70,90,30];

// const result = scores.reduce((acc, curr)=>{
//     if (curr > 50){
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);


// const scores = [
//     {player: 'Ariyan', score: 50},
//     {player: 'rakib', score: 30},
//     {player: 'mumit', score: 70},
//     {player: 'Asad', score: 60},
//     {player: 'Ariyan', score: 50},
//     {player: 'rakib', score: 30},
//     {player: 'mumit', score: 70},
//     {player: 'Asad', score: 60},
//     {player: 'Ariyan', score: 50},
//     {player: 'rakib', score: 30},
//     {player: 'mumit', score: 70},
//     {player: 'Asad', score: 60},
//     {player: 'Ariyan', score: 50},
//     {player: 'rakib', score: 30},
//     {player: 'mumit', score: 70},
//     {player: 'Asad', score: 60}
    
// ];

// const marioTotal = scores.reduce((acc, curr)=>{
//     if(curr.player === 'Ariyan'){
//         acc += curr.score;
//     }
//     return acc;
// },0);

// console.log(marioTotal);



////find method

// const scores = [10,5,0,40,60,10,20,70];

// const firstHighScore = scores.find(score=>score > 50);
// console.log(firstHighScore);


////sort method

// const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
// names.sort();
// console.log(names);



// const scores = [10,50,20,5,35,70,45];
// // scores.sort();
// // scores.reverse();
// // console.log(scores);

// scores.sort((a,b)=> b - a);
// console.log(scores);




// const players = [
//     {name: 'Ariyan', score: 50},
//     {name: 'rakib', score: 30},
//     {name: 'mumit', score: 70},
//     {name: 'Asad', score: 60}
// ];

// players.sort((a, b)=>{
//     if (a.score > b.score){
//         return -1;
//     }else if (b.score > a.score){
//         return 1;
//     }else {
//         return 0;
//     }
// });
// players.sort ((a,b)=> b.score - a.score);
// console.log(players);


////changing array method 

const products = [
    {name: 'gold star', price: 30},
    {name: 'green shells', price: 10},
    {name: 'red shells', price: 40},
    {name: 'banana skin', price: 5},
    {name: 'mashroom', price: 50}
];

// const filtered = products.filter(product=> product.price >20);

// const promos = filtered.map(product => {
//    return `the ${product.name} is ${product.price / 2} pounds`;
// });

const promos = products
.filter(product=> product.price >20)
.map(product => `the ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
























