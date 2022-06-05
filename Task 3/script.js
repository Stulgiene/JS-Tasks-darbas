/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

  
const fetchUsers = async () => {
  try {
    const response = await fetch('https://api.github.com/users');
    if (response.ok) {
      users = await response.json();
      creatUserCards(users);
    }
  } catch (Error) {
    console.error(Error);
  }
};

  const creatUserCards = async (users) => {
    const cardContainer = document.getElementById("output");
    cardContainer.innerHTML = "";

    users.forEach(user => {
    
    const avatarUrl = document.createElement("img");
    avatarUrl.setAttribute("class", "img")
      avatarUrl.src = user.avatar_url;

    const login = document.createElement("h4");
       login.innerText = user.login;

    const userCard = document.createElement("div");
    userCard.setAttribute("class", "user-card");
      userCard.append(login, avatarUrl);

    cardContainer.append(userCard);
  });
}
document.getElementById('btn').addEventListener('click', fetchUsers);


