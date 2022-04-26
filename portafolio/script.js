const homeBtn = document.querySelector("#casa");
const homeSec = document.querySelector("#home");
const aboutBtn = document.querySelector("#sobre");
const aboutSec = document.querySelector("#about");
const contactBtn = document.querySelector("#contactos");
const contactSec = document.querySelector("#contact");
const teambtn = document.querySelector("#equipo");
const teamSec = document.querySelector("#team");

/* ------------smooth scroll implementation by :Dev Ed ----------------------------------*/
/* function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
} */
/* ----------------------------------------------------------- */
/* 
homeBtn.addEventListener("click", function () {
  console.log("pa casa");
  smoothScroll("#home", 1000);

  
});

aboutBtn.addEventListener("click", function () {
  console.log("pa conocerme pe");
  smoothScroll("#about", 1000);
  
});

contactBtn.addEventListener("click", function () {
  console.log("pa contactarme pe");
  smoothScroll("#contact", 1000);
  
});

teambtn.addEventListener("click", function () {
  console.log("pa ver mi team pe, puro feeder en lol");
  smoothScroll("#team", 1000);
  
});
 */
/* make monile navigation work */

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/* sticky navigation */
const sectionHEroEl = document.querySelector("#home");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHEroEl);

/////////////////////////////////////////
//Smooth Scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");

    /// Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    //Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    //close mobile navigation

    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
