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

    const cardTextLocation = document.createElement("p");
    cardTextLocation.classList.add("card-text");
    cardTextLocation.textContent = `Location: ${university.location}`;

    const cardTextRanking = document.createElement("p");
    cardTextRanking.classList.add("card-text");
    cardTextRanking.textContent = `World Ranking: ${university.ranking}`;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardTextCountry);
    cardContent.appendChild(cardLinkWebsite);
    cardContent.appendChild(cardTextLocation);
    cardContent.appendChild(cardTextRanking);

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




