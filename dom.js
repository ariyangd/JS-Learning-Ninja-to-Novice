// // const para = document.querySelector('body > div:nth-child(1) > p.error');
// // console.log(para);

// const para = document.querySelectorAll('p');

// // para.forEach(para=>{
// //     console.log(para);
// // });

// const error = document.querySelectorAll('.error');

// console.log(para);


// const para = document.querySelector('p');
// para.innerText = 'Hi';

// console.log(para);


// const para = document.querySelector ('p');

// para.innerText += ' Ariyan';

// console.log(para.innerText);

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

// const content = document.querySelector('.content');
// console.log(content.innerHTML);  
// content.innerHTML += '<h2>This is H2</h2>';

// const people = ['mario', 'ariyan', 'rakib', 'mumit'];

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'Hi';

// const paras = document.querySelectorAll('p');
// paras.forEach ( para => {
//     console.log(para.innerText);
//     para.innerText += ' Lol';
// } );


// const people = ['mario', 'ariyan', 'rakib', 'mumit'];

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// }); 

// const link = document.querySelector('a');;

// console.log(link.getAttribute('href'));

// link.setAttribute('href', 'https://www.Facebook.com');
// link.innerText = 'Facebook';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');
// msg.setAttribute('style', 'color: green;');

// const btn = document.querySelector('button');

// btn.addEventListener('click', () =>{
//     console.log('clicked me');
// }); 

// const items = document.querySelectorAll('li');

// items.forEach(item =>{
//     item.addEventListener('click',itm=>{
//         // console.log('Item CLicked');
//         console.log(item);
//         console.log(itm.target);
//     });
// });




const ul = document.querySelector('ul');

const button = document.querySelector('button');


button.addEventListener('click', () =>{
    // ul.innerHTML += '<li> Hi </li>';
    const li = document.createElement('li');
    li.textContent = 'something new';
    ul.append(li);
    ul.prepend(li);
});


const items = document.querySelectorAll('li');

items.forEach(item =>{
    item.addEventListener('click',itm=>{
        itm.target.remove();
    });
});