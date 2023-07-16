const searchFix = document.querySelector(".header_search_fix");
const sideFix = document.querySelector(".section_side");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  // console.log("scrollY", value);

  if (value > 250) {
    searchFix.style.animation = "fixOn 0.5s ease-out forwards";
  } else {
    searchFix.style.animation = "fixOff 0.2s ease-out forwards";
  }
});

{
  /* <canvas
  width="180"
  height="37"
  style="min-width: 100%; min-height: 100%; max-width: 100%; max-height: 100%;"
></canvas>; */
}
