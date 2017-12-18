$( document ).ready(function() {
    console.log( "ready!" );
  $('#btn').on('click', function(){
  $('.movie-poster-one').addClass('grow-left');
  $('.movie-poster-two').addClass('grow-right');
  $('#vs').addClass('fade-in');
  
  $('.movie-poster-one').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      console.log("left-finished");
      });
    $('.movie-poster-two').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      console.log("right-finished");
      });
     $('#vs').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      console.log("vs-finished");
      });
  
  }); 
});