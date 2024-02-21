let navLinks = document.querySelectorAll("#navLink1, #navLink2, #navLink3");

icons.addEventListener("click", () => {
    nav.classList.toggle("active");
});

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

