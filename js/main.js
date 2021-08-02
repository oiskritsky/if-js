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
const styleBorderDisable = '1px solid #CECECE';
const styleColorDisable = '#CECECE';
const styleBorderEnable = '1px solid #3077c6';
const styleColorEnable = '#3077c6';
/// ///////////////////////
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
    minusChildren.style.border = styleBorderDisable;
    minusChildren.style.color = styleColorDisable;
    minusChildren.disabled = true;
    minusChildren.removeEventListener('click', clickChildren, true);
  } else {
    minusChildren.style.border = styleBorderEnable;
    minusChildren.style.color = styleColorEnable;
    minusChildren.disabled = false;
  }
  /// /////////////////////////////
  if (childrenInput.value >= 10) {
    plusChildren.style.border = styleBorderDisable;
    plusChildren.style.color = styleColorDisable;
    plusChildren.disabled = true;
    plusChildren.removeEventListener('click', clickChildren, true);
  } else {
    plusChildren.style.border = styleBorderEnable;
    plusChildren.style.color = styleColorEnable;
    plusChildren.disabled = false;
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
    for (let i = childrenInput.value; i >= 2 && i < 11; i += 1) {
      if (i < 11) {
        const selectClone = childrenAgePickerSelect.cloneNode(true);
        selectClone.id = '';
        selectClone.classList = 'inner';
        childrenAgePickerSelect.parentNode.insertBefore(
          selectClone,
          childrenAgePickerSelect.nextSibling
        );
      }
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
    minusAdults.style.border = styleBorderDisable;
    minusAdults.style.color = styleColorDisable;
    minusAdults.disabled = true;
  } else {
    minusAdults.style.border = styleBorderEnable;
    minusAdults.style.color = styleColorEnable;
    minusAdults.disabled = false;
  }
  if (adultsInput.value >= 30) {
    plusAdults.style.border = styleBorderDisable;
    plusAdults.style.color = styleColorDisable;
    plusAdults.disabled = true;
  } else {
    plusAdults.style.border = styleBorderEnable;
    plusAdults.style.color = styleColorEnable;
    plusAdults.disabled = false;
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
    minusRooms.style.border = styleBorderDisable;
    minusRooms.style.color = styleColorDisable;
    minusRooms.disabled = true;
  } else {
    minusRooms.style.border = styleBorderEnable;
    minusRooms.style.color = styleColorEnable;
    minusRooms.disabled = false;
  }
  if (roomsInput.value >= 30) {
    plusRooms.style.border = styleBorderDisable;
    plusRooms.style.color = styleColorDisable;
    plusRooms.disabled = true;
  } else {
    plusRooms.style.border = styleBorderEnable;
    plusRooms.style.color = styleColorEnable;
    plusRooms.disabled = false;
  }

  setValue();
};

plusRooms.addEventListener('click', clickRooms);
minusRooms.addEventListener('click', clickRooms);
