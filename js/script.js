window.addEventListener("scroll", function () {
  let headerTop = document.querySelector("#header");
  headerTop.classList.toggle("sticky", window.scrollY > 20);
});

let anchors = document.querySelectorAll('a[href^="#"]');
for (anchor of anchors) {
  if (anchor) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      anchorId = this.getAttribute("href");
      yOffset = -56;
      element = document.querySelector(anchorId);
      y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const scrollSpy = () => {
    const targets = document.querySelectorAll(".section");
    const options = {
      rootMargin: "0px 0px -350px 0px",
      threshold: 0.2,
    };

    if ("IntersectionObserver" in window) {
      const inView = (target) => {
        const interSecObs = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const elem = entry.target;
            const currentNav = document.querySelector(`[href='#${elem.id}']`);
            currentNav?.classList.toggle("active", entry.isIntersecting);
          });
        }, options);
        interSecObs.observe(target);
      };
      targets.forEach(inView);
    }
  };

  scrollSpy();
});

let slides = document.querySelector(".slider__items").children;
let nextSlide = document.querySelector(".right-slide");
let prevSlide = document.querySelector(".left-slide");
let totalSlides = slides.length;
let index = 0;

nextSlide.onclick = function () {
  next("next");
};
prevSlide.onclick = function () {
  next("prev");
};

function next(direction) {
  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalSlides - 1;
    } else {
      index--;
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}
