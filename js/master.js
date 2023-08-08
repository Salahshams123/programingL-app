// local storage
let mainColors = localStorage.getItem("color-option");
if(mainColors !== null){
 document.documentElement.style.setProperty('--main--color', mainColors );
 document.querySelectorAll(".colors-list li").forEach(element =>{
  element.classList.remove("active");
  if(element.dataset.color === mainColors ){
   element.classList.add("active"); 
  };
  });
  
};

//background option
let backgroundOption = true;
let backgroundInterval;
let mainbackground = localStorage.getItem("background-option");
if(mainbackground !== null){
 if(mainbackground === 'true'){
  backgroundOption = true;
 }
 else{ 
  backgroundOption = false;
 }
 document.querySelectorAll(".Random-backgrounds span").forEach(element =>{
  element.classList.remove("active");
  if(mainbackground === 'true' ){
   document.querySelector(".Random-backgrounds .Yes").classList.add("active");
  }
  else{
   document.querySelector(".Random-backgrounds .No").classList.add("active");
  }
  });
 };
 // testing option local storage
 let showbullets = document.querySelectorAll(".show-bullets span");
let bulletscot = document.querySelector(".nav-bullets");
 let tesoplocal = localStorage.getItem("testing-option");
 if(tesoplocal !== null){
  showbullets.forEach(e =>{
    e.classList.remove("active");
  })
  if(tesoplocal === 'block'){
    bulletscot.style.display = 'block';
    document.querySelector(".show-bullets .Yes").classList.add("active");
 }
 else{
  bulletscot.style.display = 'none';
  document.querySelector(".show-bullets .No").classList.add("active");
 }
}
//toggel spin
document.querySelector(".toggel-setting .fa-gear").onclick =function(){
this.classList.toggle("fa-spin");
document.querySelector(".settings-box").classList.toggle("open");
};

// swich colors
const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li=>{
 li.addEventListener("click" , (e) => {
document.documentElement.style.setProperty('--main--color', e.target.dataset.color);
localStorage.setItem("color-option", e.target.dataset.color);
//remove active class
handelActive(e);
 });
});
const randomBack = document.querySelectorAll(".Random-backgrounds span");
randomBack.forEach(span=>{
 span.addEventListener("click" , (e) => {
//remove active class
handelActive(e);
if(e.target.dataset.background === 'Yes'){
 backgroundOption = true;
 randomizeimage();
 localStorage.setItem("background-option", true);
}
else {
 backgroundOption = false;
 clearInterval(backgroundInterval);
 localStorage.setItem("background-option",false);
}
 });
});

//select landing page element
let landingpage = document.querySelector(".landing-page");
// get array of imgs
let imagesarr = ["001.jpeg","002.jpeg","003.jpeg","004.jpeg","006.jpeg"];
// get random number
function randomizeimage(){
 if(backgroundOption === true) {
 backgroundInterval = setInterval(() =>{
 let randomnumber = Math.floor(Math.random() * imagesarr.length);
 landingpage.style.backgroundImage = 'url("images/'+imagesarr[ randomnumber]+'")';
},2000);
}
}
randomizeimage();


//select skills selector

let ourSkills = document.querySelector(".our-skills");
window.onscroll = function(){
let skillsoffsetTop = ourSkills.offsetTop; 
let windowHeight = this.innerHeight;
let windoScrollTop = this.pageYOffset;
let skillsOuterHeight = ourSkills.offsetHeight ; 

if(windoScrollTop > (skillsoffsetTop + skillsOuterHeight - windowHeight )){
 let AllSkills = document.querySelectorAll(".skill-progress span");
 AllSkills.forEach(skill =>{
 skill.style.width = skill.dataset.progress;
 });
}
};

// galary
let ourGalary = document.querySelectorAll(".galary img");
ourGalary.forEach(imag =>{
imag.addEventListener('click',(e)=>{
 let overlay = document.createElement("div");
  overlay.className = 'popup-overlay';
  document.body.appendChild(overlay);
  let popupbox = document.createElement("div");
  popupbox.className = 'popup-box';
  if(imag.alt !== null){
    let imagHeading = document.createElement("h3");
    let imagText = document.createTextNode(imag.alt);
    imagHeading.appendChild(imagText);
    popupbox.appendChild( imagHeading);
  }
  let popupimag = document.createElement("img");
  popupimag.src = imag.src;
 popupbox.appendChild(popupimag);
  document.body.appendChild(popupbox);
   // create the close span
   let closeSpan = document.createElement("span");
   let textSpan = document.createTextNode("x");
   closeSpan.appendChild(textSpan);
   closeSpan.className = 'close-button';
   popupbox.appendChild(closeSpan);
});
});

// close popup
document.addEventListener('click',(e) =>{
if(e.target.className === 'close-button'){
  e.target.parentNode.remove();
  document.querySelector(".popup-overlay").remove();
}
});
// sellect all bullets
const allbullets = document.querySelectorAll(".nav-bullets .bullet");
const Alllinks = document.querySelectorAll(".header-area a");

function scrolltoIt(element){
  element.forEach(el => {
el.addEventListener('click',(e) =>{
e.preventDefault();
document.querySelector(e.target.dataset.section).scrollIntoView({
  behavior: "smooth"
})
});
});
}

scrolltoIt(allbullets);
scrolltoIt(Alllinks);

// handel active state
function handelActive(ev){
  ev.target.parentElement.querySelectorAll(".active").forEach(element =>{
    element.classList.remove("active");
    });
    ev.target.classList.add("active");
}

// show bullet
showbullets.forEach(show =>{
show.addEventListener('click',(e) =>{
  handelActive(e);
  if(e.target.dataset.display === 'show'){
    bulletscot.style.display = 'block';
    localStorage.setItem("testing-option",'block');
  }
  else {
    bulletscot.style.display = 'none';
    localStorage.setItem("testing-option",'none');
  }
});
});
//reset buttom
document.querySelector(".reset-options").onclick = function(){
localStorage.clear();
//localStorage.removeItem("testing-option");
//localStorage.removeItem("color-option");
//localStorage.removeItem("background-option");
//localStorage.removeItem("bullets-option");
window.location.reload();
};
// show the links
let bttoggel = document.querySelector(".header-area .toggle-menu");
let tlinks = document.querySelector(".header-area .links");
  bttoggel.onclick = function(e){
    e.stopPropagation();
  tlinks.classList.toggle("open");
  this.classList.toggle("menu-active");
};
document.addEventListener('click',(e) => {
  if(e.target !== bttoggel && e.target !== tlinks) {
    if(tlinks.classList.contains("open")){
    tlinks.classList.toggle("open");
    bttoggel.classList.toggle("menu-active");
    }
  }
  });
  tlinks.onclick = function(e){
    e.stopPropagation();
  }
  //contact us
//   document.getElementsByTagName("form")[0].onsubmit = function(){
// let nameinput = document.getElementById("username").value;
// let vaname = /\w{4}#/;
// let validname = vaname.test(nameinput);
// if(validname===false){
//   return false;
// }
// return true;
//   }