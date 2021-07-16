/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/// /////////////////////
const pickerForm = document.querySelector('.form-desktop-people__picker');
const peoplePicker = document.querySelector('.people-picker');
const childrenPicker = document.querySelector('.picker__children');
const childrenAgePicker = document.querySelector('.picker__age');
const adultsInput = document.querySelector('#adults');
const childrenInput = document.querySelector('#children');
const roomsInput = document.querySelector('#rooms');

/// ////////////////////
const plusAdults = document.querySelector('.picker__adults button.plus');
const plusChildren = document.querySelector('.picker__children button.plus');
const plusRooms = document.querySelector('.picker__rooms button.plus');
/// ////////////////////
const minusAdults = document.querySelector('.picker__adults button.minus');
const minusChildren = document.querySelector('.picker__children button.minus');
const minusRooms = document.querySelector('.picker__rooms button.minus');
/// ///////////////////
let adultsCount = 0;
const childrenCount = 0;
const roomsCount = 0;
/// ////////////////////
const setValue = () => {
  peoplePicker.setAttribute(
    'placeholder',
    `Adults - ${adultsCount} Child - ${childrenCount} Rooms - ${roomsCount}`,
  );
};
setValue();
/// /////////////////////
const visibleClass = (e) => {
  pickerForm.classList.toggle('visible');
};
peoplePicker.addEventListener('click', visibleClass);
/// ///////////////////////
const clickAdults = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('plus')) {
    adultsCount += 1;
    adultsInput.value = adultsCount;
  } else if (e.target.classList.contains('minus')) {
    adultsCount -= 1;
    adultsInput.value = adultsCount;
  }

  if (adultsInput.value <= 0) {
    adultsCount = 0;
    adultsInput.value = 0;
    minusAdults.style.border = '1px solid #CECECE';
    minusAdults.style.color = '#CECECE';
    minusAdults.disabled;
  } else {
    minusAdults.style.border = '1px solid #3077c6';
    minusAdults.style.color = '#3077c6';
  }
  if (adultsInput.value >= 30) {
    adultsCount = 30;
    adultsInput.value = 30;
    plusAdults.style.border = '1px solid #CECECE';
    plusAdults.style.color = '#CECECE';
    plusAdults.disabled;
  } else {
    plusAdults.style.border = '1px solid #3077c6';
    plusAdults.style.color = '#3077c6';
  }

  setValue();
};

plusAdults.addEventListener('click', clickAdults);
minusAdults.addEventListener('click', clickAdults);
