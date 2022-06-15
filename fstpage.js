$(".preloader").append(
  '<div style="" class="preloader"><div class="loader"><h2>advice, anyone?</h2></div></div>'
);
$(window).on("load", function () {
  setTimeout(removeLoader, 3000); //wait for page load PLUS two seconds.
});
function removeLoader() {
  $(".preloader").fadeOut(500, function () {
    // fadeOut complete. Remove the loading div
    $(".preloader").remove(); //makes page more lightweight
  });
}
