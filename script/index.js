'use strict';
const usernameInput = document.querySelector('.input-username');
const passwordInput = document.querySelector('.input-password');
const loginBtn = document.querySelector('.login-btn');
const invalidFeedback = document.querySelector('.invalid-feedback');


//Save username and password in localStorage
localStorage.setItem('username', 'deynni');
localStorage.setItem('password', 'abc123');

//Validate username and password
function validateLogin(username, password) {
    // Get the saved values from local storage
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    // Compare the values
    if (username === savedUsername && password === savedPassword) {
    return true;
    } else {
    return false;
    }
};

loginBtn.addEventListener('click', () => {
    if(!validateLogin(usernameInput.value.trim(), passwordInput.value.trim())) {
        invalidFeedback.style.visibility = 'visible';
    } else 
    window.location.href = "home.html"; 
});

 // Function to generate a random integer between min and max
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  window.onload= function() {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => {

      const users = data.results;
      const randomUsersDiv = document.querySelector('.contacts-container');

      // Loop through the users and create an HTML element for each one
      users.forEach(user => {
        // Create a div to hold the user info
        const userDiv = document.createElement('div');
        userDiv.className= 'contact-box';
        // Add the user's picture
        const userImg = document.createElement('img');
        userImg.className = 'contact-picture';
        userImg.src = user.picture.medium;
        userDiv.appendChild(userImg);
        // Add the user's full name
        const userData = document.createElement('div');
        userData.className= 'contact-info';
        const userFullName = document.createElement('p');
        userFullName.className = 'fullname';
        userFullName.innerText = `${user.name.first} ${user.name.last}`;
        userData.appendChild(userFullName);
       
        // Add the user's city
        const userCity = document.createElement('p');
        userCity.className = 'city';
        userCity.textContent = user.location.city;
        userData.appendChild(userCity);

        userDiv.appendChild(userData);

        const addIcon = document.createElement('p');
        addIcon.className = 'add-icon';
        addIcon.innerText = '+';
        userDiv.appendChild(addIcon);
      });
    })
    .catch(error => console.error(error));
      
  };
  // Fetch 10 random users from the API
 