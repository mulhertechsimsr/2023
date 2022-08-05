let menuHeight;

const sizes = () => {
    menuHeight = byId("menu").offsetHeight;
    var pageHeight = window.innerHeight ;
    
    var inicial = byId("inicial");
    inicial.style.height = "";
    inicial.style.minHeight = (pageHeight) + "px"; 
    inicial.style.paddingTop = menuHeight + "px";

}

const setupMenu = () => {
  $(".btn-menu").click(() => { $(".menu").show(); });
  $(".btn-close").click(() => { $(".menu").hide(); });
  
  $('nav a').click( (e) => {
    e.preventDefault();
    var id = $(e.target).attr('href');
    $(".menu").hide();

    if(id) {
      targetOffset = $(id).offset().top;
      $('html, body').animate({
        scrollTop: targetOffset - menuHeight
      },500);
    }
  });
}

const countDown = () => {
  var countDate = new Date("2022-05-28 08:00:00").getTime();

  // Update the count down every 1 second
  var countInterval = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  byId("count-down-days").innerHTML = days;
  byId("count-down-hours").innerHTML = hours;
  byId("count-down-minutes").innerHTML = minutes;
  byId("count-down-seconds").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(countInterval);
  }
}, 1000);
}

window.addEventListener("load", () => {
  setupMenu();
  sizes();
  countDown();
});

window.addEventListener("resize", sizes);