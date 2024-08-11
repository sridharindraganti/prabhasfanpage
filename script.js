//Code for hamburger
const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_links = document.querySelectorAll('.header .nav-bar .nav-list ul li a');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

// Add event listeners to each menu link
menu_links.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobile_menu.classList.remove('active');
  });
});
//End of code for hamburger

//Code for about section
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#about h2', 'h2-active');
    reveal('#about p', 'p-active');
    reveal('#about .text', 'text-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowHeight = window.innerHeight;

    elements.forEach(function (element) {
      var revealTop = element.getBoundingClientRect().top;
      var revealPoint = 150;

      if (revealTop < windowHeight - revealPoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});
//End of about section

//Code for timeline in education
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll('.timeline li');

  function elementInView(el) {
    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  function timelineCallBack() {
    for (var i = 0; i < items.length; i++) {
      if (elementInView(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);

    elements.forEach(function (element) {
      if (elementInView(element)) {
        element.classList.add(activeClass);
      }
    });
  }

  window.onload = function () {
    timelineCallBack();
    reveal('#education h2.education', 'education-h2-active');
  };

  window.onresize = function () {
    timelineCallBack();
    reveal('#education h2.education', 'education-h2-active');
  };

  window.onscroll = function () {
    timelineCallBack();
    reveal('#education h2.education', 'education-h2-active');
  };
});
//End of code for timeline in education

//Code for Project Section
var slideIndex = 0;
var slideInterval;

// Start slideshow
showSlides();

function plusSlides(n) {
  clearInterval(slideInterval); // Stop previous interval when manually navigating
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  clearInterval(slideInterval); // Stop previous interval when manually navigating
  showSlides(slideIndex = n - 1);
}

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  if (slideIndex == 1) {
    slideInterval = setTimeout(showSlides, 8000); // Hold on first slide for 8 seconds
  } else {
    slideInterval = setTimeout(showSlides, 5000); // Change image every 5 seconds
  }
}

// Pause slideshow when a dot is clicked
var dotClickHandler = function(dotIndex) {
  currentSlide(dotIndex + 1); // Adjust for 0-based index
  clearInterval(slideInterval); // Stop previous interval
  slideInterval = setTimeout(showSlides, 8000); // Hold on selected slide for 8 seconds
};

// Attach click event listeners to dots
var dots = document.getElementsByClassName("dot");
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", (function(index) {
    return function() {
      dotClickHandler(index);
    };
  })(i));
}

//End of code for Project Section

// Code for Certifications section
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  // Close all accordions initially on mobile screens
  if (window.innerWidth <= 900) {
    acc[i].classList.remove("active");
    acc[i].classList.remove("minus");
    acc[i].nextElementSibling.style.maxHeight = null;
  }

  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // Close the clicked accordion if it's already open
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      this.classList.remove("minus");
      panel.style.maxHeight = null;
    } else {
      // Close other accordions
      for (var j = 0; j < acc.length; j++) {
        if (acc[j] !== this) {
          acc[j].classList.remove("active");
          acc[j].classList.remove("minus");
          acc[j].nextElementSibling.style.maxHeight = null;
        }
      }

      // Open the clicked accordion
      this.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
      this.classList.add("minus"); // Add the class for minus icon
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#certifications h2', 'h2-active');
    reveal('#certifications .accordion', 'accordion-active');
    reveal('#certifications .panel', 'panel-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowheight = window.innerHeight;

    elements.forEach(function (element) {
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});
// End of Certifications section

//Code for Contact Section
document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    reveal('#contact h2', 'h2-active');
    reveal('#contact p', 'p-active');
    reveal('#contact .contactForm', 'contactForm-active');
  });

  function reveal(selector, activeClass) {
    var elements = document.querySelectorAll(selector);
    var windowheight = window.innerHeight;

    elements.forEach(function (element) {
      var revealtop = element.getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        element.classList.add(activeClass);
      } else {
        element.classList.remove(activeClass);
      }
    });
  }
});
//End of Contact Section

