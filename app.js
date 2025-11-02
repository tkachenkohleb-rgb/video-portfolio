// === Плавное появление ===
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 300);
  });
});

// === Добавление фона ===
const ae = document.createElement("div");
const pr = document.createElement("div");
ae.classList.add("bg-logo", "bg-ae");
pr.classList.add("bg-logo", "bg-pr");
document.body.append(ae, pr);

// === Плавное движение фона ===
let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = (e.clientX / window.innerWidth - 0.5) * 50;
  targetY = (e.clientY / window.innerHeight - 0.5) * 50;
});

function animate() {
  currentX += (targetX - currentX) * 0.05;
  currentY += (targetY - currentY) * 0.05;

  ae.style.transform = `translate(${currentX}px, ${currentY}px)`;
  pr.style.transform = `translate(${-currentX}px, ${-currentY}px)`;

  requestAnimationFrame(animate);
}
animate();

// === Реакция на скролл ===
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY * 0.1;
  ae.style.transform = `translateY(${scrollY}px)`;
  pr.style.transform = `translateY(${-scrollY}px)`;
});
