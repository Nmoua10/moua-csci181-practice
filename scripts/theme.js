const button = document.querySelector("#theme-toggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
});
