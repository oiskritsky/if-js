const recList = document.querySelector('.recommend__list');

const loadData = async () => {
  const hotelsData = await fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then((response) => response.json())
    .then((data) => data);

  hotelsData.forEach((el) => {
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
};

loadData();
