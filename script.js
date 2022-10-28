const button = document.querySelector("#button");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const body = document.querySelector("body");
button.addEventListener("click", () => {
  if (button.classList.contains("ex-1")) {
    // darkmode

    body.classList.add("dark-mode");
    body.classList.remove("light-mode");

    sun.classList.add("inactive");
    moon.classList.remove("inactive");

    sun.classList.add("rotate");
    moon.classList.remove("rotate");

    button.classList.add("dark-mode-button");
    button.classList.remove("light-mode-button");
    button.classList.remove("ex-1");
  } else {
    // lightmode
    body.classList.add("light-mode");
    body.classList.remove("dark-mode");

    moon.classList.add("inactive");
    sun.classList.remove("inactive");

    moon.classList.add("rotate");
    sun.classList.remove("rotate");

    button.classList.add("light-mode-button");
    button.classList.add("ex-1");
    button.classList.remove("dark-mode-button");
  }
});
