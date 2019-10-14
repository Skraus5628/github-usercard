/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
// axios
//   .get('https://api.github.com/users/skraus5628')
//   .then((response)=>{
//     console.log(response)
//   });


// function to make the card
   function gitCard (data) {
  // card container
  const userCard = document.createElement('section');
  userCard.classList.add('card')

  // image
  const userImg = document.createElement('img');
  userImg.src = data.avatar_url;

//  info container
  const userInfo = document.createElement('div');
  userInfo.classList.add('card-info');
 
// name
  const gitName = document.createElement('h2');
  gitName.classList.add('name');
  gitName.textContent = data.name;

  // username
  const userName = document.createElement('p');
  userName.textContent = data.login; 
  userName.classList.add('username');

  // location
  const location = document.createElement('p');
  location.textContent = data.location;

  // profile link
  const profile = document.createElement('p');
  profile.setAttribute('href', data.html_url);
  profile.textContent = data.url;

// followers list
  const followers = document.createElement('p');
  followers.textContent = data.followers;

// following list
  const following = document.createElement('p');
  following.textContent = data.following;

// user bio
  const bio = document.createElement('p')
  bio.textContent = data.bio;

  // appending the info container to the section
  userCard.appendChild(userInfo);

  // appending the info itself to the user info div
  userInfo.appendChild(gitName);
  userInfo.appendChild(userImg);
  userInfo.appendChild(userName);
  userInfo.appendChild(location);
  userInfo.appendChild(profile);
  userInfo.appendChild(followers);
  userInfo.appendChild(following);
  userInfo.appendChild(bio);
  const cards = document.querySelector('.cards')
  cards.appendChild(userCard);
  // returning function


};


// console.log(gitCard);


axios 
  .get('https://api.github.com/users/skraus5628')

  .then(function (response) {
    console.log(response.data);
    gitCard(response.data);
    
  })

  

  
  .catch ((error) => {
    console.log(error);
  })




// const body = document.querySelector('body')
// body.appendChild(gitCard);


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


axios 
  .get('https://api.github.com/users/skraus5628/followers')

  .then(function (response) {
    console.log(response.data);
    
    response.data.forEach((user)=>{
        gitCard(user);
    })
   
  })

  
  .catch ((error) => {
    console.log(error);
  })



const followersArray = [];




/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

// function renderUsers(data){
// //   for each loops over the data
// data.forEach(user =>{
//     //   console.log(user);
//       const profile = document.createElement('div')
//       profile.classList.add('card')
//       const name = document.createElement('h1')
//       const email = document.createElement('p')
//       const phone = document.createElement('p')

//     profile.appendChild(name);
//     profile.appendChild(email);
//     profile.appendChild(phone);

//     name.textContent = user.name;
//     email.textContent = user.email;
//     phone.textContent = user.phone;

//     const cardContainer = document.querySelector(".container");
//     cardContainer.appendChild(profile);

//       console.log(profile);
//   });
  
// }





// axios.get('https://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//       const data = res.data;
//         renderUsers(data);

//   })
//   .catch((error) => {
//       console.error(error)
//   })