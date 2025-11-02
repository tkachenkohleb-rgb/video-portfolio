document.addEventListener("DOMContentLoaded", async () => {
  const contentContainer = document.getElementById("content");
  const portfolioContainer = document.getElementById("portfolio");
  const contactContainer = document.getElementById("contact");
  const adminLink = document.getElementById("adminLink");
  const main = document.querySelector("main");

  // Получаем контент
  const response = await fetch("content/content.json");
  const content = await response.json();

  // Отображаем About
  const aboutCard = document.createElement("div");
  aboutCard.className = "card";
  aboutCard.innerHTML = `
    <h2>About</h2>
    <p>${content.about}</p>
  `;
  main.appendChild(aboutCard);

  // Отображаем Portfolio
  const portfolioCard = document.createElement("div");
  portfolioCard.className = "card";
  portfolioCard.innerHTML = `
    <h2>Portfolio</h2>
    <div class="projects-grid">
      ${content.portfolio
        .map(
          (project) => `
        <div class="project">
          <iframe width="100%" height="200" src="${project.video}" 
          title="${project.title}" frameborder="0" allowfullscreen></iframe>
          <p>${project.description}</p>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  main.appendChild(portfolioCard);

  // Отображаем Contact
  const contactCard = document.createElement("div");
  contactCard.className = "card";
  contactCard.innerHTML = `
    <h2>Contact & Order</h2>
    <div class="contact-buttons">
      <a href="${content.contacts.telegram}" class="btn" id="telegramBtn">Telegram</a>
      <a href="${content.contacts.instagram}" class="btn" id="instagramBtn">Instagram</a>
      <a href="mailto:${content.contacts.email}" class="btn" id="emailBtn">Email</a>
    </div>
  `;
  main.appendChild(contactCard);

  // Проверка админа
  adminLink.addEventListener("click", () => {
    const email = prompt("Enter your email to access admin panel:");
    if (email === "tkachenko.hleb@gmail.com") {
      window.location.href = "admin.html";
    } else {
      alert("Access denied.");
    }
  });
});
