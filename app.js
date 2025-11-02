document.addEventListener("DOMContentLoaded", async () => {
  const main = document.querySelector("main");

  // Загружаем контент из project/index.json
  const response = await fetch("project/index.json");
  const content = await response.json();

  // === Блок ABOUT ===
  const aboutCard = document.createElement("div");
  aboutCard.className = "card";
  aboutCard.innerHTML = `
    <h2>About</h2>
    <p>${content.about.replace(/\n/g, "<br>")}</p>
  `;
  main.appendChild(aboutCard);

  // === Блок PORTFOLIO ===
  const portfolioCard = document.createElement("div");
  portfolioCard.className = "card";
  portfolioCard.innerHTML = `
    <h2>Portfolio</h2>
    <div class="projects-grid">
      ${
        content.portfolio && content.portfolio.length > 0
          ? content.portfolio
              .map(
                (project) => `
          <div class="project">
            <iframe width="100%" height="200" src="${project.video}" 
            title="${project.title}" frameborder="0" allowfullscreen></iframe>
            <p>${project.description}</p>
          </div>
        `
              )
              .join("")
          : "<p>No projects yet. Add them later.</p>"
      }
    </div>
  `;
  main.appendChild(portfolioCard);

  // === Блок CONTACT ===
  const contactCard = document.createElement("div");
  contactCard.className = "card";
  contactCard.innerHTML = `
    <h2>Contact & Order</h2>
    <div class="contact-buttons">
      <a href="${content.contacts.telegram}" class="btn" id="telegramBtn" target="_blank">Telegram</a>
      <a href="${content.contacts.instagram}" class="btn" id="instagramBtn" target="_blank">Instagram</a>
      <a href="${content.contacts.email}" class="btn" id="emailBtn">Email</a>
    </div>
  `;
  main.appendChild(contactCard);
});
