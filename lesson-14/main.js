const form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = await fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    cors: 'no-cors',
    body: formData
  })
    .then((response) => (response.ok ? response.json() : console.log('Error', response.statusText)))
    .then((result) => result)
    .catch((e) => console.log(e.message));
  console.log(data);
});
