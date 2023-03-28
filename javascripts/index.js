let unOrderedList = document.querySelector(".unOrderedList");
let menu = document.querySelector(".fa-bars");
let remove = document.querySelector(".fa-remove");
let head=document.querySelector('.header')
console.log(head);
window.addEventListener('scroll',()=>{
  if(window.scrollY > 400){
    // console.log('okay');
    head.classList.add('headerFixed');
  }else{
    head.classList.remove('headerFixed');

  }
})

console.log(menu);
unOrderedList.classList.add('ShowUnOrderedList');
// ShowunOrderedList
menu.addEventListener("click", () => {
  // console.log("hello");
  unOrderedList.classList.add("unOrderedList");

  unOrderedList.classList.remove("ShowUnOrderedList");
  menu.style.display='none'
  remove.style.display='initial'

  remove.addEventListener('click',()=>{
    unOrderedList.classList.remove("unOrderedList");

  unOrderedList.classList.add("ShowUnOrderedList");
  menu.style.display='initial'
  remove.style.display='none'
  })
  // unOrderedList.classList.add("ShowUnOrderedList");
});

let workingExperienceAndeducationalBackground=document.querySelector('.workingExperienceAndeducationalBackground')
let dark=document.querySelector('.dark');
dark.addEventListener('click',()=>{
  workingExperienceAndeducationalBackground.classList.toggle('workingExperienceAndeducationalBackground2')
})
// console.log(workingExperienceAndeducationalBackground);

// *282#
