document.getElementById("year").textContent = new Date().getFullYear();
function toggleMode() {
  // const toggleBtn = document.getElementById("toggleDarkLight");
  // toggleBtn.addEventListener("click", (event) => {
  //   event.stopPropagation();
  //   const isHidden = menu.classList.contains("opacity-0");
  //   if (isHidden) {
  //     menu.classList.remove("opacity-0", "pointer-events-none");
  //     menu.classList.add("opacity-100", "pointer-events-auto");
  //   } else {
  //     menu.classList.add("opacity-0", "pointer-events-none");
  //     menu.classList.remove("opacity-100", "pointer-events-auto");
  //   }
  // });
}

const menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  document
    .querySelector(".menu-container")
    .classList.toggle("active-menu-container");
});
//npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
// toggleMode();

const toggleBtn = document.getElementById("toggleDarkLight");

toggleBtn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");

  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("toggleText", "dark_mode");
    localStorage.setItem("toggleColor", "white");
    toggleBtn.innerHTML = "dark_mode";
    toggleBtn.style.color = "white";
  } else {
    localStorage.setItem("theme", "light");
    localStorage.setItem("toggleText", "light_mode");
    localStorage.setItem("toggleColor", "black");
    toggleBtn.innerHTML = "light_mode";
    toggleBtn.style.color = "black";
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const savedText = localStorage.getItem("toggleText");
  const savedColor = localStorage.getItem("toggleColor");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  if (savedText && savedColor) {
    toggleBtn.innerHTML = savedText;
    toggleBtn.style.color = savedColor;
  }
});
