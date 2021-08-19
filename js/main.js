import { loadSlider } from './slider.js';

const getHotelsData = async (url) => {
  const getHotels = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
  return getHotels;
};

const loadData = async () => {
  const hotelsData = await getHotelsData('https://fe-student-api.herokuapp.com/api/hotels/popular');

  hotelsData.forEach((el) => {
    const recList = document.querySelector('.recommend__list');
    const li = document.createElement('li');
    const img = document.createElement('img');
    const hotelName = document.createElement('a');
    const hotelLocation = document.createElement('p');
    li.classList.add('recommend__list-item');
    img.src = el.imageUrl;
    hotelName.href = '#';
    hotelName.textContent += el.name;
    hotelLocation.textContent += `${el.city}, ${el.country}`;

    li.appendChild(img);
    li.appendChild(hotelName);
    li.appendChild(hotelLocation);

    recList.appendChild(li);
  });
  loadSlider();
};

loadData();
