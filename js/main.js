/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/// /////////////////////
const pickerForm = document.querySelector('.form-desktop-people__picker');
const peoplePicker = document.querySelector('.people-picker');
const childrenPicker = document.querySelector('.picker__children');
const childrenAgePicker = document.querySelector('.picker__age');
const childrenAgePickerSelect = document.querySelector('#age');
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
let childrenCount = 0;
let roomsCount = 0;
/// ////////////////////

// Установка значений в placeholder
const setValue = () => {
  peoplePicker.setAttribute(
    'placeholder',
    `Adults - ${adultsCount} Child - ${childrenCount} Rooms - ${roomsCount}`
  );
};
setValue();
/// /////////////////////

// присвоение класса нашему блоку picker при выполнении
const setPickerVisibleClass = () => {
  pickerForm.classList.toggle('visible');
};

// присвоение класса нашему блоку picker при клике
peoplePicker.addEventListener('click', setPickerVisibleClass);
/// ////////////////////////////////////////////////

const clickChildren = (e) => {
  e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button
  /// /////////////////////////////
  if (e.target.classList.contains('plus')) {
    childrenCount += 1;
    childrenInput.value = childrenCount;
  } else if (e.target.classList.contains('minus')) {
    childrenCount -= 1;
    childrenInput.value = childrenCount;
  }
  /// /////////////////////////////
  if (childrenInput.value <= 0) {
    childrenCount = 0;
    childrenInput.value = 0;
    minusChildren.style.border = '1px solid #CECECE';
    minusChildren.style.color = '#CECECE';
    minusChildren.disabled;
    minusChildren.removeEventListener('click', clickChildren, true);
  } else {
    minusChildren.style.border = '1px solid #3077c6';
    minusChildren.style.color = '#3077c6';
  }
  /// /////////////////////////////
  if (childrenInput.value >= 10) {
    childrenCount = 10;
    childrenInput.value = 10;
    plusChildren.style.border = '1px solid #CECECE';
    plusChildren.style.color = '#CECECE';
    plusChildren.disabled;
    plusChildren.removeEventListener('click', clickChildren, true);
  } else {
    plusChildren.style.border = '1px solid #3077c6';
    plusChildren.style.color = '#3077c6';
  }
  /// /////////////////////////////
  setValue();
};

plusChildren.addEventListener('click', clickChildren);
minusChildren.addEventListener('click', clickChildren);

/// /////////////////////////////////////////////////////////
const childrenAgePickerShow = (e) => {
  if (childrenInput.value >= 1) {
    childrenAgePicker.style.display = 'block';
  }
  for (let i = childrenInput.value; i >= 2 && i <= 10; i += 1) {
    if (i < 10) {
      const selectClone = childrenAgePickerSelect.cloneNode(true);
      selectClone.id = '';
      selectClone.classList = 'inner';
      childrenAgePickerSelect.parentNode.insertBefore(
        selectClone,
        childrenAgePickerSelect.nextSibling
      );
    }
  }
};

const childrenAgePickerHide = (e) => {
  const removeLastSelect = document.querySelector('select.inner:last-child');
  if (childrenInput.value < 1) {
    childrenAgePicker.style.display = 'none';
  } else if (childrenInput.value >= 1) {
    removeLastSelect.remove();
  }
};

plusChildren.addEventListener('click', childrenAgePickerShow);
minusChildren.addEventListener('click', childrenAgePickerHide);

/// /////////////////////////////////////////////////////////
const clickAdults = (e) => {
  e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button

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

const clickRooms = (e) => {
  e.preventDefault(); // отключаем дефолтное поведение браузера при клике по button

  if (e.target.classList.contains('plus')) {
    roomsCount += 1;
    roomsInput.value = roomsCount;
  } else if (e.target.classList.contains('minus')) {
    roomsCount -= 1;
    roomsInput.value = roomsCount;
  }

  if (roomsInput.value <= 0) {
    roomsCount = 0;
    roomsInput.value = 0;
    minusRooms.style.border = '1px solid #CECECE';
    minusRooms.style.color = '#CECECE';
    minusRooms.disabled;
  } else {
    minusRooms.style.border = '1px solid #3077c6';
    minusRooms.style.color = '#3077c6';
  }
  if (roomsInput.value >= 30) {
    roomsCount = 30;
    roomsInput.value = 30;
    plusRooms.style.border = '1px solid #CECECE';
    plusRooms.style.color = '#CECECE';
    plusRooms.disabled;
  } else {
    plusRooms.style.border = '1px solid #3077c6';
    plusRooms.style.color = '#3077c6';
  }

  setValue();
};

plusRooms.addEventListener('click', clickRooms);
minusRooms.addEventListener('click', clickRooms);
