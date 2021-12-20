function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav topnav") {
    x.className += " responsive";
  } else {
    x.className = "nav topnav";
  }
}

$(window).scroll(function() {
    if( $(this).scrollTop() > 100 ) {
        $('.navbar-fixed-top').addClass("navbar-fixed-top-sticky");
    } else {
        $('.navbar-fixed-top').removeClass("navbar-fixed-top-sticky");
    }
});

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
      var destino = $(this.hash);
      if (destino.length == 0) {
        destino = $('a[name="' + this.hash.substr(1) + '"]');
      }
      if (destino.length == 0) {
        destino = $('html');
      }
      $('html, body').animate({ scrollTop: destino.offset().top }, 1000);
      return false;
    });
    
    

    $(function() {
        $( "#button" ).click(function() {
          $( "#button" ).addClass( "onclic", 250, validate);
        });
      
        function validate() {
          setTimeout(function() {
            $( "#button" ).removeClass( "onclic" );
            $( "#button" ).addClass( "validate", 450, callback );
          }, 2250 );
        }
          function callback() {
            setTimeout(function() {
              $( "#button" ).removeClass( "validate" );
            }, 1250 );
          }
        });

    
  });


  