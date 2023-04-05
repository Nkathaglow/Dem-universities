const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";

for(let i=0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick,50);

function onTick() {
const span = text.querySelectorAll('span')[char];
span.classList.add('fade');
char++
if(char === splitText.length) {
    complete();
    return;
   }
}

function complete() {
clearInterval(timer);
timer = null;
}



fetch("http://localhost:3000/universities")
.then(response => response.json())
.then(data => {
  const universitiesContainer = document.getElementById("universities-container");
  data.forEach(university => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = university.poster;
    cardImg.alt = university.name;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = university.name;

    const cardTextCountry = document.createElement("p");
    cardTextCountry.classList.add("card-text");
    cardTextCountry.textContent = `Country: ${university.country}`;

    const cardLinkWebsite = document.createElement("p");
    cardLinkWebsite.classList.add("card-text");
    cardLinkWebsite.innerHTML = `Website: <a href="${university.web_pages[0]}" class="card-link">${university.web_pages[0]}</a>`;

    const cardTextDomains = document.createElement("p");
    cardTextDomains.classList.add("card-text");
    cardTextDomains.textContent = `Domains: ${university.domains}`;

    

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTextCountry);
    cardContent.appendChild(cardLinkWebsite);
    cardContent.appendChild(cardTextDomains);
    
    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardContent);

    universitiesContainer.appendChild(cardContainer);
  });
})
.catch(error => {
  console.error(error);
});
// Get the chat popup element and the open button
const chatPopup = document.getElementById("myChat");
const openButton = document.getElementById("openButton");

// Get the chat area element, chat input element, and send button
const chatArea = document.getElementById("chatArea");
const chatInput = document.getElementById("chatInput");
const sendButton = document.getElementById("sendButton");

// Get the close button
const closeButton = document.getElementById("closeButton");

// Open the chat popup when the user clicks the open button
openButton.addEventListener("click", () => {
  chatPopup.style.display = "block";
});

// Close the chat popup when the user clicks the close button
closeButton.addEventListener("click", () => {
  chatPopup.style.display = "none";
});

// Send a chat message when the user clicks the send button
sendButton.addEventListener("click", () => {
  // Get the user's chat message
  const message = chatInput.value; 
  const newMessage = document.createElement("p");
  
  // Check if the user sent "hi"
  if (message.toLowerCase() === "hi") {
    newMessage.textContent = "Welcome to our channel, how can we help you?";

  } else {
    newMessage.textContent = `You: ${message}`;
  }
    // Add the new chat message to the chat area
  chatArea.appendChild(newMessage);
  
  // Create a new chat message element

});




