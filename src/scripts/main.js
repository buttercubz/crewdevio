const script = () => {
  const toggleButton = document.querySelector("#menu-icon");
  const navbarLinks = document.querySelector(".nav-menu");
  toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
  });

  window.addEventListener("click", function (e) {
    if (toggleButton.contains(e.target)) {
      return;
    }
    if (!navbarLinks.contains(e.target)) {
      navbarLinks.classList.remove("active");
    }
  });
};

export default script;
