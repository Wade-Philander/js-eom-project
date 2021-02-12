$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //typing animation
  var typed = new Typed(".typing", {
    strings: ["The Future", "a Developer", "a Designer", "a Content Creater"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing2", {
    strings: ["The Future", "a Developer", "a Designer", "a Content Creater"],
    typeSpeed: 100,
    backspeed: 60,
    loop: true,
  });

  // owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        item: 1,
        nav: false,
      },
      600: {
        item: 2,
        nav: false,
      },
      1000: {
        item: 3,
        nav: false,
      },
    },
  });
  const spans = document.querySelectorAll("logo, span");
  spans.forEach((span) =>
    span.addEventListener("mouseover", function (e) {
      span.classList.add("animated", "rubberBand");
    })
  );
  spans.forEach((span) =>
    span.addEventListener("mouseout", function (e) {
      span.classList.remove("animated", "rubberBand");
    })
  );

  const htmlBar = document.querySelector(".bar-html");
  const cssBar = document.querySelector(".bar-css");
  const jsBar = document.querySelector(".bar-js");
  const pyBar = document.querySelector(".bar-py");
  const cBar = document.querySelector(".bar-c");

  var tl = new TimelineLite();
});

var lang = {
  html: "100%",
  css: "90%",
  javascript: "70%",
  python: "55%",
  flask: "65%",
};

var multiply = 4;

$.each(lang, function (language, pourcent) {
  var delay = 700;

  setTimeout(function () {
    $("#" + language + "-pourcent").html(pourcent);
  }, delay * multiply);

  multiply++;
});
