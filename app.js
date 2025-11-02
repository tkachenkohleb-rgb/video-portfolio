// АНИМАЦИЯ ПОЯВЛЕНИЯ
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
    }, i * 200);
  });
});

// ПАРАЛЛАКС-ФОН
const ae = document.createElement("div");
const pr = document.createElement("div");
ae.classList.add("bg-logo", "bg-ae");
pr.classList.add("bg-logo", "bg-pr");
document.body.append(ae, pr);

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 40;
  const y = (e.clientY / window.innerHeight - 0.5) * 40;
  ae.style.transform = `translate(${x}px, ${y}px)`;
  pr.style.transform = `translate(${-x}px, ${-y}px)`;
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY * 0.2;
  ae.style.transform = `translateY(${scrollY}px)`;
  pr.style.transform = `translateY(${-scrollY}px)`;
});
