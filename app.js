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
  const $row1 = $('<div>').addClass('row').attr('id', 'row1');
  const $row2 = $('<div>').addClass('row').attr('id', 'row2');
  const $row3 = $('<div>').addClass('row').attr('id', 'row3');
  const $row4 = $('<div>').addClass('row').attr('id', 'row4');
  const $row5 = $('<div>').addClass('row').attr('id', 'row5');
  const $row6 = $('<div>').addClass('row').attr('id', 'row6');
  const $row7 = $('<div>').addClass('row').attr('id', 'row7');
  // const $row8 = $('<div>').addClass('row').attr('id', 'row8');

  $gameBoard.append($row1);
  $gameBoard.append($row2);
  $gameBoard.append($row3);
  $gameBoard.append($row4);
  $gameBoard.append($row5);
  $gameBoard.append($row6);
  $gameBoard.append($row7);
  // $gameBoard.append($row8);

  // make square grid
  // for (let i = 0; i < 56; i++){
  //   let id = i + 1;
  //   id.toString();
  //   let $square = $('<div>').addClass('square').attr('id', id);
  //   $gameBoard.append($square);
  //   // $('.container').append($gameBoard);
  // };

  //make columns
const rows = (row) => {
  for (let i = 0; i < 8; i++){
    let num = i + 1;
    let id = 'column' + num;
    // let rowClass = 'row' + num;
    id.toString();
    let $column = $('<div>').addClass('circle').attr('id', id);
    row.append($column);
    // $('.container').append($gameBoard);
    };
  };


rows($row1);
rows($row2);
rows($row3);
rows($row4);
rows($row5);
rows($row6);
rows($row7);
// rows($row8);

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
        //  $(event.currentTarget).text('red');
         console.log("1");
         //Show text Player 1, it's your turn!
         alternate = false;
       }else if(alternate === false){
         $(event.currentTarget).css('background-color', 'blue');
        //  $(event.currentTarget).text('blue');
         console.log("2");
         //Show text Player 2, it's your turn!
         alternate = true;
     }else{
         return false;
       };
     };
   };


$classCircle.on('click', playersTakeTurns);

$row1.on('click', () =>{console.log('row1 logging')});
$row2.on('click', () =>{console.log('row2 logging')});
$row3.on('click', () =>{console.log('row3 logging')});
$row4.on('click', () =>{console.log('row4 logging')});
$row5.on('click', () =>{console.log('row5 logging')});
$row6.on('click', () =>{console.log('row6 logging')});
$row7.on('click', () =>{console.log('row7 logging')});
// $row8.on('click', () =>{console.log('row8 logging')});

$classCircle.on('click', () =>{console.log($(event.currentTarget).id)});
// $row2.on('click', () =>{console.log('row2 logging')});
// $row3.on('click', () =>{console.log('row3 logging')});
// $row4.on('click', () =>{console.log('row4 logging')});
// $row5.on('click', () =>{console.log('row5 logging')});
// $row6.on('click', () =>{console.log('row6 logging')});
// $row7.on('click', () =>{console.log('row7 logging')});










})
