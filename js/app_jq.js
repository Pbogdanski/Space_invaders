// kod projektu [wpisz nazwę]
$(document).ready(function(){
    var canvas = $('#canvas');
    var ptak = $('#ptak');
    var pole = $('.pole');
    var pole1 = $('#pole1');
    var pole2 = $('#pole2');
    var punkty = $('#punkty');
    var speed = $('#speed');
    var restart_btn =$('#restart_btn')

    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    var bird_left = parseInt(bird.css('left'));
    var bird_height = parseInt(bird.height());
    var speed = 10;
    var go_up = false;
    var game_over = false;

    var gra = setInterval(function () {
      if (colision(ptak, pole1) || colision(ptak, pole2) || parseInt(ptak.css('top')) <= 0 || parseInt(bird.css('top')) > canvas_height - ptak_height {
        zatrzymaj_gre();
      } else {
        var pole_current_position = parseInt(pole.css('right'));

        if (pole_current_position > canvas_width - ptak_left) {
          if (punkty_updated === false) {
            punkty.text(parseInt(punkty.text()) + 1);
            punkty_updated = true;
          }
        }
        
      }
    } )

});
