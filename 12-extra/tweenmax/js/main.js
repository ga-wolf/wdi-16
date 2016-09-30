var billAnimation;

$(document).ready(function () {

  var $bill = $(".bill");
  billAnimation = TweenMax.to($bill, 10, {
    left: "90vw",
    delay: 0.5,
    rotation: 3600,
    scaleX: 1.5,
    scaleY: 1.5,
    ease: Bounce.easeOut,
    top: Math.random() > 0.5 ? "90vh" : "0vh",
    yoyo: true,
    repeat: -1,
    // repeatDelay: 0.5
  });
  $(".reverse").on("click", function () {
    billAnimation.reverse();
  });
  $(".pause").on("click", function () {
    billAnimation.pause();
  });
  $(".play").on("click", function () {
    billAnimation.play();
  });
  $(".doubleSpeed").on("click", function () {
    billAnimation.timeScale( 2 );
  });
  $(".halfSpeed").on("click", function () {
    billAnimation.timeScale( 0.5 );
  });

  $(".seek").on("input change", function () {
    var currentVal = parseInt( $(".seek").val() );
    billAnimation.pause();
    billAnimation.seek( currentVal );
  });

  $(".speed").on("input change", function () {
    var currentVal = parseInt( $(".speed").val() );
    billAnimation.play();

    if ( currentVal ) {
      billAnimation.timeScale( currentVal );
    } else {
      billAnimation.timeScale( 1 );
    }
  });

});
