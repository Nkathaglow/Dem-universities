fetch("http://localhost:3000/universities")
.then(response => response.json())
.then(data => {
  const universitiesContainer = document.getElementById("universities-container");
  data.forEach(university => {
    const cardTitle = document.createElement("h2");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = university.name;

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const cardImg = document.createElement("img");
    cardImg.classList.add("card-img");
    cardImg.src = university.poster;
    cardImg.alt = university.name;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");


    const cardTextCountry = document.createElement("p");
    cardTextCountry.classList.add("card-text");
    cardTextCountry.textContent = `Country: ${university.country}`;

    const cardLinkWebsite = document.createElement("p");
    cardLinkWebsite.classList.add("card-text");
    cardLinkWebsite.innerHTML = `Website: <a href="${university.web_pages[0]}" class="card-link">${university.web_pages[0]}</a>`;

    const cardTextDomains = document.createElement("p");
    cardTextDomains.classList.add("card-text");
    cardTextDomains.textContent = `Domains: ${university.domains.join(",")}`;

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

