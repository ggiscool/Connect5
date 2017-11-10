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

//Adding rows to the gameboard---------------------
  $gameBoard.append($row1);
  $gameBoard.append($row2);
  $gameBoard.append($row3);
  $gameBoard.append($row4);
  $gameBoard.append($row5);
  $gameBoard.append($row6);
  $gameBoard.append($row7);
  // $gameBoard.append($row8);

  // make square grid - didn't work out----------------
  // for (let i = 0; i < 56; i++){
  //   let id = i + 1;
  //   id.toString();
  //   let $square = $('<div>').addClass('square').attr('id', id);
  //   $gameBoard.append($square);
  //   // $('.container').append($gameBoard);
  // };

  //make row function----------------------
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

//Calling row formation functions-------------------
rows($row1);
rows($row2);
rows($row3);
rows($row4);
rows($row5);
rows($row6);
rows($row7);
// rows($row8);


//make basic logic------------------------
  const $classCircle = $('.circle');

   const playersTakeTurns = (event) => {
     if($(event.currentTarget).css('background-color') !== 'red' || 'blue'){
       if( alternate === true){
         $(event.currentTarget).css('background-color', 'red');
        //  $(event.currentTarget).text('1').css('color', 'red').css('font-size', '10px');
         console.log("1");
         //Show text Player 1, it's your turn!
         alternate = false;
       }else if(alternate === false){
         $(event.currentTarget).css('background-color', 'blue');
        //  $(event.currentTarget).text('2').css('color', 'blue').css('font-size', '10px');
         console.log("2");
         //Show text Player 2, it's your turn!
         alternate = true;
     }else{
         return false;
       };
     };
   };











//Calling take turns function
$classCircle.on('click', playersTakeTurns);

//testing with console.logsssss --------------------------
$row1.on('click', () =>{console.log('row1')});
$row2.on('click', () =>{console.log('row2')});
$row3.on('click', () =>{console.log('row3')});
$row4.on('click', () =>{console.log('row4')});
$row5.on('click', () =>{console.log('row5')});
$row6.on('click', () =>{console.log('row6')});
$row7.on('click', () =>{console.log('row7')});

$classCircle.on('click', () =>{console.log($(event.currentTarget).attr('id'))});


//Win cases
// const winCases = [
//   ['', '', '', ''];








})
