console.log("we have the meat$");

$(() => {

//make game board
  const $gameBoard = $('<div>').addClass('gameboard');
  let alternate = true;
  let clicks = 0;
  // const $player1 = $('<div>').addClass('playPiece1');
  // const $player2 = $('<div>').addClass('playPiece2');

  for (let i = 0; i < 56; i++){
    let id = i + 1;
    id.toString();
    let $square = $('<div>').addClass('square').attr('id', id);
    $gameBoard.append($square);
    $('.container').append($gameBoard);
  };

  for (let i = 0; i < 56; i++){
    let id = i + 1;
    id.toString();
    let $circle = $('<div>').addClass('circle').attr('id', id);
    $gameBoard.append($circle);
    // $('.container').append($gameBoard);
  };

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












})
