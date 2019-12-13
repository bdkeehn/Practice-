
 
 //slider code
 $(document).ready(function(){
    $('.slider').slider();
  });

  // //carousel javascript code
  // $(document).ready(function(){
  //   $('.carousel').carousel();
  // });

  $.ajax({
    method:"GET",
    url: "api.openweathermap.org/data/2.5/weather?q=chicago"
  }).done(function(response){
    console.log(response);
  })
  













