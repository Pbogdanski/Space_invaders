// kod projektu [flappy bird]
$(document).ready(function() {
    var container = $('#container');
    var ptak = $('#ptak');
    var pole = $('.pole');
    var przeszkoda1 = $('#przeszkoda1');
    var przeszkoda2 = $('#przeszkoda2');
    var punkty = $('#punkty');
    var speed = $('#speed');
    var restart_btn =$('#restart_btn')

    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var ptak_left = parseInt(ptak.css('left'));
    var ptak_height = parseInt(ptak.height());
    var speed = 10;

    var go_up = false;
    var punkty_updated = false;
    var game_over = false;

        // naliczanie punktów
    var gra = setInterval(function () {
      if (colision(ptak, przeszkoda1) || colision(ptak, przeszkoda2) || parseInt(ptak.css('top')) <= 0 || parseInt(ptak.css('top')) > container_height - ptak_height) {

        zatrzymaj_gre();

      } else {
        var pole_current_position = parseInt(pole.css('right'));

        if (pole_current_position > container_width - ptak_left) {
          if (punkty_updated === false) {
            punkty.text(parseInt(punkty.text()) + 1);
            punkty_updated = true;
          }
        }
        // sprawdza czy przeszkody nie wyszły poza container
        if (pole_current_position > container_width) {
          var new_height = parseInt(Math.random() * 100);

            // nowe rozmiary przeszkód
          przeszkoda1.css('height', pole_initial_height + new_height);
          przeszkoda2.css('height', pole_initial_height - new_height);

            // zwiększenie prędkości
          speed = speed +1;
          speed.text(speed);

          punkty_updated = false
          pole_current_position = pole_initial_position;
        }
        pole.css('right', pole_current_position + speed);
        if (go_up === false) {
          go_down();
        }
      }
    }, 40);

      // określenie czym bd podskakiwać (key === 32 to spacja)
    $(document).on('keydown', function (e) {
      var key = e.keyCode;
      if (key === 32 && go_up === false && game_over === false) {
        go_up = setInterval(up, 50);
      }
    });

    $(document).on('keyup', function (e) {
      var key = e.keyCode;
      if (key === 32) {
        clearInterval(go_up);
        go_up = false;
      }
    });

    function go_down(){
      ptak.css('top', parseInt(ptak.css('top')) + 10 );
    }

    function up(){
      ptak.css('top', parseInt(ptak.css('top')) - 15 );
    }

    function zatrzymaj_gre() {
      clearInterval(gra);
      game_over = true;
      restart_btn.slideDown();
    }

    restart_btn.click(function () {
      location.reload();
    });

function colision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

});
