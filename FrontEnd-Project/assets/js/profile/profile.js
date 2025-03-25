let fixed = document.getElementById("scroll-navbar");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 195 ||
    document.documentElement.scrollTop > 195
  ) {
    fixed.style.top = "0";
  } else {
    fixed.style.top = "-62px";
    $("div").removeClass("inActive");
  }
}