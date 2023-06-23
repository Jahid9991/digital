const carousel = document.querySelector(".carousel");
// firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false,
  prevPageX,
  prevScrollLeft;
// let firstImgWidth = firstImg.clientWidth + 14;

const dragStart = (e) => {
  isDragStart = true;
  prevPageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);


const questions = document.querySelectorAll(".questions-container");
// console.log(questions)

// const showAnswer =(e)=>{
//     console.log(element)
// }
let i = 0;

questions.forEach((element) => {
  element.addEventListener("mousedown", () => {
    const answer = element.querySelector(".answer");
    const icon = element.querySelector(".icon");
    if (i == 0) {
      answer.classList.add("visible");
      icon.classList.add("icon-visible");
      element.classList.add('question-border')
      i = 1;
    } else {
      answer.classList.remove("visible");
      icon.classList.remove("icon-visible");
      element.classList.remove('question-border')
      i = 0;
    }
  });
});


const hamburger = document.querySelector(".hamburger");
const hamMenu = document.querySelector(".ham-menu");

// console.log(hamburger)
let ini = 0;
hamburger.addEventListener("click", ()=>{
    // console.log("working")
    if(ini==0){
        hamburger.classList.add("showham");
        hamMenu.classList.remove( "ham-show")
        ini = 1;
    }
    else{
        hamburger.classList.remove("showham");
        hamMenu.classList.add("ham-show")
        ini = 0;
    }
})
