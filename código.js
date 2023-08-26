const submit = document.getElementById('.submit');

submit.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);

  const response = fetch('', {
    method: 'POST',
    body: formData
  });

  const data = await response.json();

  
});