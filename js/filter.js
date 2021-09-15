import { bubbleSort } from './sorter.js';
import { loadSliderAvailableHotels } from './slider_availableBlock.js';

const pickerForm = document.querySelector('.form-desktop-people__picker');
const peoplePicker = document.querySelector('.people-picker');
const sendFormButton = document.querySelector('#sendForm');
const main = document.querySelector('main');
const available = document.querySelector('.available');
const availableUL = document.querySelector('.available__list');
const searchInput = document.querySelector('#search');
const childrenAgePicker = document.querySelector('.picker__age');
const childrenAgePickerSelect = document.querySelector('#age');
const adultsInput = document.querySelector('#adults');
const childrenInput = document.querySelector('#children');
const roomsInput = document.querySelector('#rooms');
const plusAdults = document.querySelector('.picker__adults button.plus');
const plusChildren = document.querySelector('.picker__children button.plus');
const plusRooms = document.querySelector('.picker__rooms button.plus');
const minusAdults = document.querySelector('.picker__adults button.minus');
const minusChildren = document.querySelector('.picker__children button.minus');
const minusRooms = document.querySelector('.picker__rooms button.minus');

const apiBaseUrl = 'https://fe-student-api.herokuapp.com/api/';
const apiHotelsUrl = `${apiBaseUrl}hotels`;

const filterData = {
  adults: {
    min: 1,
    max: 30,
    default: 1
  },
  children: {
    min: 0,
    max: 10,
    default: 0
  },
  rooms: {
    min: 1,
    max: 30,
    default: 1
  }
};

const disableButtonOnLoad = () => {
  minusAdults.disabled = true;
  minusChildren.disabled = true;
  minusRooms.disabled = true;
};

const setValue = () => {
  if (adultsInput.value > filterData.adults.max) {
    adultsInput.value = filterData.adults.max;
  } else if (adultsInput.value < filterData.adults.min) {
    adultsInput.value = 1;
  }
  if (childrenInput.value > filterData.children.max) {
    childrenInput.value = 10;
  } else if (childrenInput.value < filterData.children.min) {
    childrenInput.value = 0;
  }
  if (roomsInput.value > filterData.rooms.max) {
    roomsInput.value = 30;
  } else if (roomsInput.value < filterData.rooms.min) {
    roomsInput.value = 1;
  }
  peoplePicker.setAttribute(
    'value',
    `Adults - ${adultsInput.value} Child - ${childrenInput.value} Rooms - ${roomsInput.value}`
  );
};

const availableHotelsData = async (url) =>
  await fetch(url, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));

const setPickerVisibleClass = () => {
  pickerForm.classList.toggle('visible');
  disableButtonOnLoad();
};

const clickChildren = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('plus')) {
    childrenInput.value++;
  } else if (e.target.classList.contains('minus')) {
    childrenInput.value--;
  }

  if (childrenInput.value <= filterData.children.min) {
    minusChildren.disabled = true;
  } else {
    minusChildren.disabled = false;
  }

  if (childrenInput.value >= filterData.children.max) {
    plusChildren.disabled = true;
    plusChildren.removeEventListener('click', clickChildren, true);
  } else {
    plusChildren.disabled = false;
  }

  setValue();
};

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

const clickAdults = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('plus')) {
    adultsInput.value++;
  } else if (e.target.classList.contains('minus')) {
    adultsInput.value--;
  }
  if (adultsInput.value <= filterData.adults.min) {
    minusAdults.disabled = true;
  } else {
    minusAdults.disabled = false;
  }
  if (adultsInput.value >= filterData.adults.max) {
    plusAdults.disabled = true;
  } else {
    plusAdults.disabled = false;
  }

  setValue();
};

const clickRooms = (e) => {
  e.preventDefault();

  if (e.target.classList.contains('plus')) {
    roomsInput.value++;
  } else if (e.target.classList.contains('minus')) {
    roomsInput.value--;
  }

  if (roomsInput.value <= filterData.rooms.min) {
    minusRooms.disabled = true;
  } else {
    minusRooms.disabled = false;
  }
  if (roomsInput.value >= filterData.rooms.max) {
    plusRooms.disabled = true;
  } else {
    plusRooms.disabled = false;
  }

  setValue();
};

const allEventListener = () => {
  peoplePicker.addEventListener('click', setPickerVisibleClass);

  plusChildren.addEventListener('click', clickChildren);
  minusChildren.addEventListener('click', clickChildren);
  childrenInput.addEventListener('input', clickChildren);

  plusChildren.addEventListener('click', childrenAgePickerShow);
  minusChildren.addEventListener('click', childrenAgePickerHide);

  plusAdults.addEventListener('click', clickAdults);
  minusAdults.addEventListener('click', clickAdults);
  adultsInput.addEventListener('input', clickAdults);

  plusRooms.addEventListener('click', clickRooms);
  minusRooms.addEventListener('click', clickRooms);
  roomsInput.addEventListener('input', clickRooms);
};

// === Экспортируемая функция === //

const filter = async () => {
  adultsInput.value = filterData.adults.default;
  childrenInput.value = filterData.children.default;
  roomsInput.value = filterData.rooms.default;

  setValue();
  allEventListener();

  const sendForm = (e) => {
    e.preventDefault();
    const childrenAgesArr = [];
    const selects = document.querySelectorAll('select');
    if (childrenInput.value > 0 && adultsInput.value > 0) {
      for (let i = 0; i <= childrenInput.value - 1; i += 1) {
        childrenAgesArr.push(selects[i].value);
      }
    }
    return childrenAgesArr;
  };

  const loadAvailable = async (e) => {
    const childrens = sendForm(e).toString();
    let urlAvailableHotel = '';
    if (!(availableUL.childNodes.length === 0)) {
      availableUL.innerHTML = '';
    }
    if (availableUL.childNodes.length === 0) {
      if (childrens === '' && adultsInput.value == 0 && roomsInput.value == 0) {
        urlAvailableHotel = `${apiHotelsUrl}?search=${searchInput.value}`;
      } else if (childrens === '' && adultsInput.value == 0) {
        urlAvailableHotel = `${apiHotelsUrl}?search=${searchInput.value}&rooms=${roomsInput.value}`;
      } else if (childrens === '' && roomsInput.value == 0) {
        urlAvailableHotel = `${apiHotelsUrl}?search=${searchInput.value}&adults=${adultsInput.value}`;
      } else if (childrens === '') {
        urlAvailableHotel = `${apiHotelsUrl}?search=${searchInput.value}&adults=${adultsInput.value}&rooms=${roomsInput.value}`;
      } else {
        urlAvailableHotel = `${apiHotelsUrl}?search=${searchInput.value}&adults=${adultsInput.value}&children=${childrens}&rooms=${roomsInput.value}`;
      }

      const availableHotels = await availableHotelsData(urlAvailableHotel);
      const sortedAvailableHotels = bubbleSort(availableHotels);

      if (!(sortedAvailableHotels.length === 0)) {
        available.classList.add('visible');
        sortedAvailableHotels.forEach((el) => {
          const li = document.createElement('li');
          const img = document.createElement('img');
          const hotelName = document.createElement('a');
          const hotelLocation = document.createElement('p');

          li.classList.add('available__list-item');
          img.src = el.imageUrl;
          hotelName.href = '#';
          hotelName.textContent += el.name;
          hotelLocation.textContent += `${el.city}, ${el.country}`;

          li.appendChild(img);
          li.appendChild(hotelName);
          li.appendChild(hotelLocation);

          availableUL.appendChild(li);

          availableUL.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          });
        });
      } else {
        available.innerHTML = `<div class="not_found"> Ничего не найдено
        </div>`;
        available.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
        setTimeout(() => {
          main.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
          });
          available.classList.remove('visible');
          searchInput.value = '';
        }, 3000);
      }
      await loadSliderAvailableHotels();
    }
  };

  sendFormButton.addEventListener('click', loadAvailable);
};

export { filter };
