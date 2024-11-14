const dropdowns = document.querySelectorAll(".dropdown select");
for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    select.append(newOption);
  }

  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
$(document).ready(function(){
  $('.autoslide').slick({
      slidesToShow: 1,         // Show only one slide at a time
      slidesToScroll: 1,       // Scroll one slide at a time
      autoplay: true,          // Enable autoplay
      autoplaySpeed: 2000,     // Set the speed of autoplay (in ms)
      infinite: true,          // Enable infinite loop
      centerMode: false,       // Disable center mode to prevent partial slides
      arrows: true,            // Enable arrows for navigation
      dots: true,              // Enable dots for navigation
      focusOnSelect: true,     // Enable clicking to select slides
      
  });
});
// slickslider
$(document).ready(function () {
  function initSlider() {
      if ($(window).width() < 768) {
          if (!$('.autoplay').hasClass('slick-initialized')) {
              $('.autoplay').slick({
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplaySpeed: 2000,
                  infinite: true,
                  arrows: true,
                  dots: true,
              }).on('setPosition', function () {
                  $('.slick-slide img').css('display', 'inline'); // Set display to inline
              });
          }
      } else {
          if ($('.autoplay').hasClass('slick-initialized')) {
              $('.autoplay').slick('unslick');
          }
      }
  }

  initSlider();
  $(window).resize(function () {
      initSlider();
  });
});
// nav bar scrolled
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {  // Adjust scroll threshold if necessary
          navbar.classList.add("scrolled");
      } else {
          navbar.classList.remove("scrolled");
      }
  });
});

// for faq
function toggleAnswer(index) {
  const answer = document.getElementById(`answer-${index}`);
  const icon = document.getElementById(`icon-${index}`);
  
  // Toggle display of answer
  if (answer.style.display === "none" || !answer.style.display) {
      answer.style.display = "block";
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
  } else {
      answer.style.display = "none";
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
  }
}






