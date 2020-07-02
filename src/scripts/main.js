const script = () => {
  let slideRigth = {
    distance: "600%",
    origin: "left",
    opacity: null,
    delay: 500,
    duration: 1500,
  };

  let slideDown = {
    distance: "600%",
    origin: "top",
    opacity: null,
    delay: 500,
    duration: 750,
  };
  let slideLeft = {
    distance: "200%",
    origin: "rigth",
    opacity: null,
    delay: 300,
    duration: 1000,
  };

  ScrollReveal().reveal(".welcome-info", slideLeft);
  const toggleButton = document.querySelector("#menu-icon");
  const navbarLinks = document.querySelector(".nav-menu");

  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  window.addEventListener("click", function (e) {
    if ( toggleButton.contains(e.target)) {
      return;
    }
    if (!navbarLinks.contains(e.target)) {
      navbarLinks.classList.remove("active")
    }
  });
};

export default script;
