let hidden=document.querySelector('.hidden')
let show=document.querySelector('.showMore')

show.addEventListener('click',()=>{
    if (hidden.style.display==='none'){
        hidden.style.display='block'
        show.textContent='show less'
    }else{
        hidden.style.display='none'
        show.textContent='show more'
    }
})

let nav = document.querySelector(".nav");
let menu = document.querySelector(".menu");
let ul = document.querySelector(".ul");

menu.addEventListener("click", () => {
  ul.classList.toggle("show");
});
// window.addEventListener('scroll',()=>{
//     if(window.scrollY>10){
//         // alert('hello world')
//         nav.style.position='fixed'
//     }
// })
