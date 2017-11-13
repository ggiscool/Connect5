console.log("we have the meat$");


// //defining columns----------------OBSOLETE
// const $column1 = $('<div>').addClass('column').attr('id', 'column1');
// const $column2 = $('<div>').addClass('column').attr('id', 'column2');
// const $column3 = $('<div>').addClass('column').attr('id', 'column3');
// const $column4 = $('<div>').addClass('column').attr('id', 'column4');
// const $column5 = $('<div>').addClass('column').attr('id', 'column5');
// const $column6 = $('<div>').addClass('column').attr('id', 'column6');
// const $column7 = $('<div>').addClass('column').attr('id', 'column7');
// const $column8 = $('<div>').addClass('column').attr('id', 'column8');
//
// //Adding rows to the gameboard-------------OBSOLETE
// $gameBoard.append($column1);
// $gameBoard.append($column2);
// $gameBoard.append($column3);
// $gameBoard.append($column4);
// $gameBoard.append($column5);
// $gameBoard.append($column6);
// $gameBoard.append($column7);
// $gameBoard.append($column8);

//Define variables-----------------------------------------------
  let alternate = true;

//Function making the game board, columns, and circles--------------
const generateBoard = () =>
{
  const $gameBoard = $('<div>').addClass('gameBoard');
  for (let i = 0; i < 8; i++)
  {
    const $column = $('<div>').addClass('column');
    $column.attr('id', 'column' + (i + 1));
    for ( let j = 0; j < 7; j++)
    {
      const $circle = $('<div>').addClass('circle');
      $column.append($circle);
    }
    $gameBoard.append($column);
  }
  $('.container').append($gameBoard);
}

//Function that plays a piece at the bottom of the column clicked----------
const playersTakeTurns = (event) => {

  const $columns = $(event.currentTarget).parent();
  const $test = $columns.children();
  //line below is correct
  for (let i = ($columns.children().length - 1); i >= 0; i--) {
    // console.log('$columns.eq(i)', $columns.eq(i));
    console.log('i', i);
    // for (let i = $test[6]; i >= 0; i--){

    //If the clicked piece has no value, then toggle between Player 1 (red), and Player 2, (blue).
    if(!$test.eq(i).attr('value')){
      if( alternate === true){
        $test.eq(i).css('background-color', 'red').attr('value', 'clicked');
        // console.log("Player1");
        //Show text Player 1, it's your turn!
        alternate = false;
        //call checkWin fxn
        return 0;
      }else if(alternate === false){
        $test.eq(i).css('background-color', 'blue').attr('value', 'clicked');
        // console.log("Player2");
        //Show text Player 2, it's your turn!
        alternate = true;
        //call checkWin fxn
        return 0;
      }


      if($test.eq(i).attr('value')){

      }
    }
    //correct below
    console.log('event.target', $test[6]);


  }
}
//Pseudocode for the rest of the game------------------------
//Win cases
// const winCases = [
//   ['', '', '', ''];

//Prompt who wins

//Keep score of who wins each of 3 rounds



//Make a reset function to run when you start game

//End pseudocode----------------------------------------------

//WIndows Onload
$(() => {

  //Call the fxn to make the game board
  generateBoard();


  $('.circle').on('click', playersTakeTurns);

  });
  // make square grid ----------------OBSOLETE
  // for (let i = 0; i < 56; i++){
  //   let id = i + 1;
  //   id.toString();
  //   let $square = $('<div>').addClass('square').attr('id', id);
  //   $gameBoard.append($square);
  //   // $('.container').append($gameBoard);
  // };

  //make row function----------------------OBSOLETE
  // const assignColumns = (column) => {
  //   for (let i = 0; i < 7; i++){
  //     let num = i + 1;
  //     let id = 'row' + num;
  //     // let rowClass = 'row' + num;
  //     id.toString();
  //     let $circles = $('<div>').addClass('circle').attr('id', id);
  //     column.append($circles);
  //     };
  //   };
  //
  // //Calling column formation functions-------------------OBSOLETE
  // assignColumns($column1);
  // assignColumns($column2);
  // assignColumns($column3);
  // assignColumns($column4);
  // assignColumns($column5);
  // assignColumns($column6);
  // assignColumns($column7);
  // assignColumns($column8);






//Calling take turns function
$('.circle').on('click', playersTakeTurns);



//
// //testing with console.logsssss -----------------------OBSOLETE
// $('#column1').on('click', () =>{console.log('column1')});
// $('#column2').on('click', () =>{console.log('column2')});
// $('#column3').on('click', () =>{console.log('column3')});
// $('#column4').on('click', () =>{console.log('column4')});
// $('#column5').on('click', () =>{console.log('column5')});
// $('#column6').on('click', () =>{console.log('column6')});
// $('#column7').on('click', () =>{console.log('column7')});

// $('.circle').on('click', () =>{console.log($(event.currentTarget).attr('id'))});
