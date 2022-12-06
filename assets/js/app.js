//Active Menu
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav_menu li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
};


//Typing Script
var typed = new Typed(".typing", {
  strings: ["Web Developer", "Web Designer", "Freelancer", "Blogger"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});
var typed = new Typed(".typing1", {
  strings: ["Web Designer", "Web Developer", "Freelancer", "Blogger"],
  typeSpeed: 80,
  backSpeed: 80,
  loop: true,
});
//LightBox
var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});

//FAQ
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
  faq.onclick = () => {
    faq.classList.toggle("faq_open");

    const faqIcon = faq.querySelector(".faq_icon i");
    if (faqIcon.className === "fa-solid fa-plus") {
      faqIcon.className = "fa-solid fa-minus";
    } else {
      faqIcon.classList.remove("fa-minus");
      faqIcon.classList.add("fa-plus");
    }
  }
});

// Show/Hide Nav Menu
const navMenu = document.querySelector(".nav_menu");
const opneMenuBtn = document.getElementById("open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
console.log(closeMenuBtn);

opneMenuBtn.onclick = () => {
  navMenu.style.display = "flex"
  opneMenuBtn.style.display = "none"
  closeMenuBtn.style.display = "inline-block"
}

closeMenuBtn.addEventListener('click', function () {
  navMenu.style.display = "none";
  opneMenuBtn.style.display = "inline-block";
  closeMenuBtn.style.display = "none";
});