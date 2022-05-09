let silderItems = document.querySelectorAll(".slide-item"),
  previous = document.querySelector(".left"),
  next = document.querySelector(".right"),
  count = 0,
  navbar = document.querySelector(".navbar"),
  bars = document.querySelector(".navbar .fa-bars"),
  navItems = document.querySelector(".navbar .nav-items"),
  navLinks = document.querySelectorAll(".nav-link"),
  categories = document.querySelectorAll(".catogory"),
  tabs = document.querySelectorAll(".tab"),
  sections = document.querySelectorAll(".section"),
  projects = document.querySelectorAll(".project");
//slider setting----------------
window.onload = () => {
  let loadingSpinner = document.querySelector(".loadingOver");
  loadingSpinner.classList.add("removeLoading");
};
var id = setInterval(autoSlider, 9900);
previous.onclick = () => {
  if (count == 0) {
    count = silderItems.length - 1;
  } else {
    count--;
  }
  slider(silderItems, count);
  clearInterval(id);
  id = setInterval(autoSlider, 9900);
};
next.onclick = () => {
  if (count == silderItems.length - 1) {
    count = 0;
  } else {
    count++;
  }
  slider(silderItems, count);
  clearInterval(id);
  id = setInterval(autoSlider, 9900);
};

function autoSlider() {
  next.click();
}
slider = (items, count) => {
  items.forEach((element) => {
    element.classList.remove("open");
  });
  items[count].classList.add("open");
};
//navbar setting---------------------
window.onscroll = () => {
  if (window.pageYOffset > 20) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};
bars.onclick = (e) => {
  navItems.classList.toggle("open-nav");
  bars.classList.toggle("fa-times");
};
navLinks.forEach((a) => {
  a.addEventListener("click", (e) => {
    addNavLinkAcive();
    a.classList.add("active");
    if (window.innerWidth < 768) {
      bars.click();
    }
  });
});
const addNavLinkAcive = () => {
  navLinks.forEach((element) => {
    element.classList.remove("active");
  });
};
//----------tabs---------------
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((e) => {
      e.classList.remove("active");
    });
    tab.classList.add("active");
    sections.forEach((section) => {
      section.classList.remove("open");
    });
    document.querySelector(`.${tab.dataset.toggle}`).classList.add("open");
  });
});
//----------catogeries----------
categories.forEach((a) => {
  a.addEventListener("click", (e) => {
    categories.forEach((element) => {
      element.classList.remove("active");
    });
    a.classList.add("active");
    projects.forEach((project) => {
      if (a.dataset.category === project.dataset.category) {
        project.classList.add("show");
      } else if (a.dataset.category === "all") {
        project.classList.add("show");
      } else {
        project.classList.remove("show");
      }
    });
  });
});
categories[0].click();
//------------------------------------
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
