// window.onload = function() {
//     window.scrollTo(0, 0);
// };



AOS.init();



let menu=document.querySelector('.menu')
let remove=document.querySelector('.remove')
let ul=document.querySelector('.ul')


// console.log(ul);
menu.addEventListener('click',()=>{

    ul.classList.remove('ul')
    ul.classList.add('ulShow')
    menu.classList.add('remove')
    menu.classList.remove('menu')

    remove.classList.add('menu')
    remove.classList.remove('remove')
    remove.style.color='white'
    

})

remove.addEventListener('click',()=>{

    ul.classList.add('ul')
    ul.classList.remove('ulShow')

    menu.classList.remove('remove')
    menu.classList.add('menu')

    remove.classList.remove('menu')
    remove.classList.add('remove')
    

})

let a=document.querySelectorAll('a')
console.log(a);

a.forEach((link)=>{
    link.addEventListener('click',()=>{
        ul.classList.add('ul')
        ul.classList.remove('ulShow')
    
        menu.classList.remove('remove')
        menu.classList.add('menu')
    
        remove.classList.remove('menu')
        remove.classList.add('remove')
    })
})