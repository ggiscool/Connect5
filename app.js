console.log("we have the meat$");

$(() => {

//make game board
  const $gameBoard = $('<div>').addClass('gameBoard');
  let alternate = true;
  // let clicks = 0;
  // const $player1 = $('<div>').addClass('playPiece1');
  // const $player2 = $('<div>').addClass('playPiece2');
  $('.container').append($gameBoard);


  //defining columns
  const $column1 = $('<div>').addClass('column').attr('id', 'column1');
  const $column2 = $('<div>').addClass('column').attr('id', 'column2');
  const $column3 = $('<div>').addClass('column').attr('id', 'column3');
  const $column4 = $('<div>').addClass('column').attr('id', 'column4');
  const $column5 = $('<div>').addClass('column').attr('id', 'column5');
  const $column6 = $('<div>').addClass('column').attr('id', 'column6');
  const $column7 = $('<div>').addClass('column').attr('id', 'column7');
  const $column8 = $('<div>').addClass('column').attr('id', 'column8');

//Adding rows to the gameboard---------------------
  $gameBoard.append($column1);
  $gameBoard.append($column2);
  $gameBoard.append($column3);
  $gameBoard.append($column4);
  $gameBoard.append($column5);
  $gameBoard.append($column6);
  $gameBoard.append($column7);
  $gameBoard.append($column8);

  // make square grid - didn't work out----------------
  // for (let i = 0; i < 56; i++){
  //   let id = i + 1;
  //   id.toString();
  //   let $square = $('<div>').addClass('square').attr('id', id);
  //   $gameBoard.append($square);
  //   // $('.container').append($gameBoard);
  // };

  //make row function----------------------
const columns = (column) => {
  for (let i = 0; i < 7; i++){
    let num = i + 1;
    let id = 'row' + num;
    // let rowClass = 'row' + num;
    id.toString();
    let $row = $('<div>').addClass('circle').attr('id', id);
    column.append($row);
    // $('.container').append($gameBoard);
    };
  };

//Calling column formation functions-------------------
columns($column1);
columns($column2);
columns($column3);
columns($column4);
columns($column5);
columns($column6);
columns($column7);
columns($column8);


//make basic logic------------------------
  const $circles = $('.circle');

   const playersTakeTurns = (event) => {
    //  if($(event.currentTarget).css('background-color' == 'pink')){----HELP
    //EXPERIMENTING -----------------------
    const $columns = $(event.currentTarget);
    const $circles = $columns.children('.circle');
  // };
      for (let i = ($circles.length - 1); i >= 0; i--) {
          if ($circles.eq(i).children().length == 0) {
              const $checker = $('<div>').addClass("checker");
              // $circles.eq(i).append($checker);
              // $checker.show();
            };
          };
      //Experimenting done----------------------------
       if( alternate === true){
         $(event.currentTarget).css('background-color', 'red');
        //  $(event.currentTarget).text('1').css('color', 'red').css('font-size', '10px');
         console.log("Player1");
         //Show text Player 1, it's your turn!
         alternate = false;
       }else if(alternate === false){
         $(event.currentTarget).css('background-color', 'blue');
        //  $(event.currentTarget).text('2').css('color', 'blue').css('font-size', '10px');
         console.log("Player2");
         //Show text Player 2, it's your turn!
         alternate = true;
     }else{
         return false;
       };
     };
  //  };







//Calling take turns function
$circles.on('click', playersTakeTurns);

//testing with console.logsssss --------------------------
$column1.on('click', () =>{console.log('column1')});
$column2.on('click', () =>{console.log('column2')});
$column3.on('click', () =>{console.log('column3')});
$column4.on('click', () =>{console.log('column4')});
$column5.on('click', () =>{console.log('column5')});
$column6.on('click', () =>{console.log('column6')});
$column7.on('click', () =>{console.log('column7')});

$circles.on('click', () =>{console.log($(event.currentTarget).attr('id'))});


//Win cases
// const winCases = [
//   ['', '', '', ''];








});
