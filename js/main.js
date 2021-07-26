const data = [
  {
    name: 'Hotel Leopold',
    city: 'Saint Petersburg',
    country: 'Russia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
  },
  {
    name: 'Apartment Sunshine',
    city: 'Santa  Cruz de Tenerife',
    country: 'Spain',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
  },
  {
    name: 'Villa Kunerad',
    city: 'Vysokie Tatry',
    country: 'Slowakia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
  },
  {
    name: 'Hostel Friendship',
    city: 'Berlin',
    country: 'Germany',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
  },
  {
    name: 'Radisson Blu Hotel',
    city: 'Kyiv',
    country: 'Ukraine',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
  },
  {
    name: 'Paradise Hotel',
    city: 'Guadalupe',
    country: 'Mexico',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
  },
  {
    name: 'Hotel Grindewald',
    city: 'Interlaken',
    country: 'Switzerland',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
  },
  {
    name: 'The Andaman Resort',
    city: 'Port Dickson',
    country: 'Malaysia',
    imageUrl:
      'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
  },
];

data.forEach((el) => {
  // looking for an element in which we will insert the blocks
  const recList = document.querySelector('.recommend__list');
  // create block
  const li = document.createElement('li'); // create tag "li"
  li.classList.add('recommend__list-item');
  const img = document.createElement('img'); // create tag "img"
  const hotelName = document.createElement('a'); // create tag "a"
  const hotelLocation = document.createElement('p'); // create tag "p"
  // content block
  img.src = el.imageUrl; // add image source from array "data"
  hotelName.href = '#'; // add link
  hotelName.textContent += el.name; // add content(hotel name)
  hotelLocation.textContent += `${el.city}, ${el.country}`; // add content(location)
  // build block
  li.appendChild(img); // insert hotel's foto
  li.appendChild(hotelName); // insert hotel's name
  li.appendChild(hotelLocation); // insert hotel's location(city and country)

  // insert block into DOM
  recList.appendChild(li); /// insert into DOM hotels list with img, name and location
});
