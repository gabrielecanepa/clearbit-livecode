const authorization = 'Bearer sk_YOUR_API_KEY';

// TODO:
// 1. Add a listener to the form
// 2. Prevent the reload when we submit
// 3. Send an AJAX request to the Clearbit API
// 4. Read the response and display the results in a table

const form = document.querySelector('#clearbitForm');
const emailInput = document.querySelector('#clearbitEmail');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userBio = document.querySelector('#userBio');
const userLocation = document.querySelector('#userLocation');
const userAvatar = document.querySelector('#userAvatar');

const setUserInfo = (data) => {
  userName.innerText = data.name.fullName;
  userEmail.innerText = data.email;
  userLocation.innerText = data.location;
  userBio.innerText = data.bio;
  userAvatar.src = data.avatar || 'images/placeholder.png';
  // ↪ same as userAvatar.setAttribute('src', data.avatar)
};

const fetchUserInfo = (email) => {
  fetch(`https://person.clearbit.com/v2/people/find?email=${email}`, {
    headers: {
      Authorization: authorization
    }
  })
    .then(response => response.json())
    .then((data) => {
      setUserInfo(data);
    });
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  fetchUserInfo(emailInput.value);
});
