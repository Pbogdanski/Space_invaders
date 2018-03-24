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
    var bird_left = parseInt(ptak.css('left'));
    var bird_height = parseInt(ptak.height());
    var speed = 10;
    var go_up = false;
    var game_over = false;

        // naliczanie punktów
    var gra = setInterval(function () {
      if (colision(ptak, przeszkoda1) || colision(ptak, przeszkoda2) || parseInt(ptak.css('top')) <= 0 || parseInt(ptak.css('top')) > container_height - ptak_height {

        zatrzymaj_gre();

      } else {
        var pole_current_position = parseInt(pole.css('right'));

        if (pole_current_position > container_width - ptak_left) {
          if (punkty_updated === false) {
            punkty.text(parseInt(punkty.text()) + 1);
            punkty_updated = true;
          }
        }

      }
    } ))

});
