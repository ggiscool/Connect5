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
  // const $column8 = $('<div>').addClass('column').attr('id', 'column8');

  $gameBoard.append($column1);
  $gameBoard.append($column2);
  $gameBoard.append($column3);
  $gameBoard.append($column4);
  $gameBoard.append($column5);
  $gameBoard.append($column6);
  $gameBoard.append($column7);
  // $gameBoard.append($column8);

  // make square grid
  for (let i = 0; i < 56; i++){
    let id = i + 1;
    id.toString();
    let $square = $('<div>').addClass('square').attr('id', id);
    $gameBoard.append($square);
    // $('.container').append($gameBoard);
  };

  //make columns
const columns = (column) => {
  for (let i = 0; i < 8; i++){
    let num = i + 1;
    let id = 'circle' + num;
    // let columnClass = 'column' + num;
    id.toString();
    let $circle = $('<div>').addClass('circle').attr('id', id);
    column.append($circle);
    // $('.container').append($gameBoard);
    };
  };


columns($column1);
columns($column2);
columns($column3);
columns($column4);
columns($column5);
columns($column6);
columns($column7);
// columns($column8);

  // for (let i = 0; i < 56; i++){
  //   let id = 'circle' + i + 1;
  //   id.toString();
  //   let $circle = $('<div>').addClass('circle').attr('id', id);
  //   $gameBoard.append($circle);
  //   // $('.container').append($gameBoard);
  // };

//make basic logic
  const $classCircle = $('.circle');

   const playersTakeTurns = (event) => {
     if($(event.currentTarget).text() === ''){
       if( alternate === true){
         $(event.currentTarget).css('background-color', 'red');
         console.log("1");
         //Show text Player 1, it's your turn!
         alternate = false;
       }else if(alternate === false){
         $(event.currentTarget).css('background-color', 'blue');
         console.log("2");
         //Show text Player 2, it's your turn!
         alternate = true;
     }else{
         return false;
       };
     };
   };



$classCircle.on('click', playersTakeTurns);

$('.column1').on('click', () =>{console.log('column1 logging')});
$('.column2').on('click', () =>{console.log('column2 logging')});
$('.column3').on('click', () =>{console.log('column3 logging')});
$('.column4').on('click', () =>{console.log('column4 logging')});
$('.column5').on('click', () =>{console.log('column5 logging')});
$('.column6').on('click', () =>{console.log('column6 logging')});
$('.column7').on('click', () =>{console.log('column7 logging')});
$('.column8').on('click', () =>{console.log('column8 logging')});











})
