const btn = document.querySelector("button");
const profile = document.querySelector(".flip-card");
btn.addEventListener("click", () => {
  profile.classList.toggle("show");
});
