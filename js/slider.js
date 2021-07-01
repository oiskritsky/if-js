let position = 0;
const slidesToShow = 4;
const slidesToScroll = 1;
const container = document.querySelector(".recommend-list__wrapper");
const track = document.querySelector(".recommend__list");

let btnPrev = document.querySelector(".btn-prev");
let btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".recommend__list-item");
const itemCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

items.forEach((item) => {
  item.style.minWidth = `${itemWidth}px`;
});

btnPrev.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) + (slidesToShow * itemWidth) / itemWidth;
  position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

btnNext.addEventListener("click", () => {
  const itemsLeft = Math.abs(position) / itemWidth;
  position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
  setPosition();
  checkBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}px)`;
};
const checkBtns = () => {
  btnPrev.disabled = position <= -(itemCount - slidesToShow) * itemWidth;
  btnNext.disabled = position === 0;
};
