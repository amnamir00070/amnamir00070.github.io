$('.clip').parent().click(function () {
  if($(this).children(".clip").get(0).paused){        $(this).children(".clip").get(0).play();   $(this).children(".playpause").fadeOut();
    }else{       $(this).children(".clip").get(0).pause();
  $(this).children(".playpause").fadeIn();
    }
});