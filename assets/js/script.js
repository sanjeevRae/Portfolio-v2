'use strict';

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
};

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.addEventListener('DOMContentLoaded', function() {
  let modal = document.getElementById('myModal');
  let modalImg = document.getElementById('img01');
  let captionText = document.getElementById('caption');
  let images = document.querySelectorAll('.pholder-item img');
  let currentIndex;

  images.forEach((img, index) => {
    img.addEventListener('click', function() {
      modal.style.display = 'block';
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
      currentIndex = index;
    });
  });

  let span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
    modal.style.display = 'none';
  };

  document.querySelector('.next').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
  });

  document.querySelector('.prev').addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
  });
});


//greeting

document.addEventListener("DOMContentLoaded", function() {
  const greetings = [
      "Hello",
      "नमस्कार",
      "Hallo"
      
  ];

  const greetingElement = document.getElementById("greeting");
  const greetingsContainer = document.getElementById("greetings-container");
  let currentIndex = 0;

  function showNextGreeting() {
      greetingElement.textContent = greetings[currentIndex];
      currentIndex++;
      if (currentIndex < greetings.length) {
          setTimeout(showNextGreeting, 400);
      } else {
          setTimeout(hideGreetingsContainer, 400);
      }
  }

  function hideGreetingsContainer() {
      greetingsContainer.classList.add("hidden");
      
      setTimeout(() => {
          greetingsContainer.style.display = 'none';
      }, 700);
  }

  showNextGreeting();
});
