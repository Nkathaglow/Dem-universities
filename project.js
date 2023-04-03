fetch("http://localhost:3000/universities")
      .then(response => response.json())
      .then(data => {
        const universitiesDiv = document.getElementById("universities");
        data.forEach(university => {
          const universityDiv = document.createElement("div");
          universityDiv.innerHTML = `
            <h2>${university.name}</h2>
            <img src="${university.poster}" alt="${university.name}">
            <p>Country: ${university.country}</p>
            <p>Website: <a href="${university.web_pages[0]}">${university.web_pages[0]}</a></p>
            <p>Domains: ${university.domains.join(", ")}</p>
          `;
          universitiesDiv.appendChild(universityDiv);
        });
      })
      .catch(error => {
        console.error(error);
      });