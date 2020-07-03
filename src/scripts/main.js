const script = () => {
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
