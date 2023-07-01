let unOrderedList = document.querySelector(".unOrderedList");
let menu = document.querySelector(".fa-bars");
let remove = document.querySelector(".fa-remove");
let head = document.querySelector(".header");
// console.log(head);
// window.addEventListener("scroll", () => {
//   if (window.scrollY > 700) {
//     // console.log('okay');
//     head.classList.add("headerFixed");
//   } else {
//     head.classList.remove("headerFixed");
//   }
// });

// console.log(menu);
unOrderedList.classList.add("ShowUnOrderedList");
// ShowunOrderedList
menu.addEventListener("click", () => {
  // console.log("hello");
  unOrderedList.classList.add("unOrderedList");

  unOrderedList.classList.remove("ShowUnOrderedList");
  menu.style.display = "none";
  remove.style.display = "initial";

  remove.addEventListener("click", () => {
    unOrderedList.classList.remove("unOrderedList");

    unOrderedList.classList.add("ShowUnOrderedList");
    menu.style.display = "initial";
    remove.style.display = "none";
  });
  // unOrderedList.classList.add("ShowUnOrderedList");
});

let workingExperienceAndeducationalBackground = document.querySelector(
  ".workingExperienceAndeducationalBackground"
);
let dark = document.querySelector(".dark");
dark.addEventListener("click", () => {
  workingExperienceAndeducationalBackground.classList.toggle(
    "workingExperienceAndeducationalBackground2"
  );
});
// console.log(workingExperienceAndeducationalBackground);

// *282#

let seeMore = document.querySelector(".see-more");
let seeLess=document.querySelector('.see-less')
let hide = document.querySelector(".hide");
hide.style.display = "none";
seeLess.style.display = "none";


seeMore.addEventListener("click", () => {
  hide.style.display = "initial"
  seeMore.style.display = "none";
  seeLess.style.display = "initial"

  seeLess.addEventListener("click", () => {
    hide.style.display = "none"
    seeLess.style.display = "none";
    seeMore.style.display = "initial"
  
    
  
  });
  

});
let name=document.querySelector('.name')
name.textContent='<>coded by oluwadamilare </>'