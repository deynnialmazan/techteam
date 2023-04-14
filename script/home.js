'use strict';

 // Function to generate a random integer between min and max
 function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  window.onload= function() {
    fetch('https://randomuser.me/api/?nat=CA&results=10')
    .then(response => response.json())
    .then(data => {

      const users = data.results;
      const randomUsersDiv = document.querySelector('.contacts-container');
  
      users.forEach(user => {

        // Create a div to hold the user info
        const userDiv = document.createElement('div');
        userDiv.className= 'contact-box';

        const userImg = document.createElement('img');
        userImg.className = 'contact-picture';
        userImg.src = user.picture.medium;
        userDiv.appendChild(userImg);

        const userData = document.createElement('div');
        userData.className= 'contact-info';
        const userFullName = document.createElement('p');
        userFullName.className = 'fullname';
        userFullName.innerText = `${user.name.first} ${user.name.last}`;
        userData.appendChild(userFullName);
       

        const userCity = document.createElement('p');
        userCity.className = 'city';
        userCity.textContent = user.location.city;
        userData.appendChild(userCity);

        userDiv.appendChild(userData);

        const addIcon = document.createElement('p');
        addIcon.className = 'add-icon';
        addIcon.innerText = '+';
        userDiv.appendChild(addIcon);

        randomUsersDiv.appendChild(userDiv);
      });
    })
    
    .catch(error => console.error(error));
      
  };

 