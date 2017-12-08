$( document ).ready(function() {
    console.log( "ready!" );
  $('#btn').on('click', function(){
   $('.movie-poster-one-bg').addClass('grow-left');
  $('.movie-poster-two-bg').addClass('grow-right');
  $('#vs').addClass('rotate');
  });
});