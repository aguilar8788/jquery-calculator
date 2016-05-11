var divide = $($('.operator')[1]).html();

$(document).ready(function(){

  var screens = $('#screen');
  var number;
  var number_2;
  var total;
  var operator;
  


  $('span').on('click', function(){

    screens.append($(this).text());

    $('#cancel').on('click', function(){
        $('#screen').empty();
     });


     if($(this).html() == '+'){
       number = parseInt(screens.html());
       operator = '+';
       $('#screen').empty();
       console.log(number);
       console.log(operator);

     }else if($(this).html() == 'x'){
       number = parseInt(screens.html());
       operator = '*';
       $('#screen').empty();
       console.log(number);
       console.log(operator);

     }else if($(this).html() == '-'){
       number = parseInt(screens.html());
       operator = '-';
       $('#screen').empty();
       console.log(number);
       console.log(operator);

     }else if($(this).text() == divide){
       number = parseInt(screens.html());
       operator = '/';
       $('#screen').empty();
       console.log(number);
       console.log(operator);

     }else if($(this).html() == '='){
       number_2 = parseInt(screens.html());
       $('#screen').empty();
       total = eval(number + operator + number_2);
       screens.append(total);

     }


    });



 });
