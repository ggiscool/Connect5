console.log("we have the meat$");


// //defining columns
// const $column1 = $('<div>').addClass('column').attr('id', 'column1');
// const $column2 = $('<div>').addClass('column').attr('id', 'column2');
// const $column3 = $('<div>').addClass('column').attr('id', 'column3');
// const $column4 = $('<div>').addClass('column').attr('id', 'column4');
// const $column5 = $('<div>').addClass('column').attr('id', 'column5');
// const $column6 = $('<div>').addClass('column').attr('id', 'column6');
// const $column7 = $('<div>').addClass('column').attr('id', 'column7');
// const $column8 = $('<div>').addClass('column').attr('id', 'column8');
//
// //Adding rows to the gameboard---------------------
// $gameBoard.append($column1);
// $gameBoard.append($column2);
// $gameBoard.append($column3);
// $gameBoard.append($column4);
// $gameBoard.append($column5);
// $gameBoard.append($column6);
// $gameBoard.append($column7);
// $gameBoard.append($column8);


  let alternate = true;

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

//make basic logic------------------------
const playersTakeTurns = (event) => {

  //EXPERIMENTING -----------------------
  const $columns = $(event.currentTarget).parent();
  const $test = $columns.children();
  //
  // const $circles = $(event.currentTarget);
  //I want to add the circles as children of teh columns they're in, so when you click the column, the bottom-most non-'clicked' circle will change color
  //line below is correct
  for (let i = ($columns.children().length - 1); i >= 0; i--) {
    // console.log('$columns.eq(i)', $columns.eq(i));
    console.log('i', i);
    // if($(event.currentTarget).attr('value')){
    //run fxn below
    //make loop around 'test', use line 86 syntax

    // for (let i = $test[6]; i >= 0; i--){


    if(!$test.eq(i).attr('value')){
      if( alternate === true){
        $test.eq(i).css('background-color', 'red').attr('value', 'clicked');
        // console.log("Player1");
        //Show text Player 1, it's your turn!
        alternate = false;
        return 0;
      }else if(alternate === false){
        $test.eq(i).css('background-color', 'blue').attr('value', 'clicked');
        // console.log("Player2");
        //Show text Player 2, it's your turn!
        alternate = true;
        return 0;
      }


      if($test.eq(i).attr('value')){
        //move to i--
        //run for (let i = $test[6]; i >= 0; i--){ again

        //run fxn below

      }
    }
    //correct below
    console.log('event.target', $test[6]);

    //   };// }; --------------can be disconnected here into 2 sep fxns
    //Experimenting done----------------------------


  }
}


$(() => {

  //make game board


  // const $gameBoard = $('<div>').addClass('gameBoard');
  // const $circles = $('.circle');
  // const $columns = $('<.column>');
  generateBoard();


  $('.circle').on('click', playersTakeTurns);
  // make square grid - didn't work out----------------
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


  //defining additional variables



});
// };






//Calling take turns function
$('.circle').on('click', playersTakeTurns);
//
// //testing with console.logsssss --------------------------
// $('#column1').on('click', () =>{console.log('column1')});
// $('#column2').on('click', () =>{console.log('column2')});
// $('#column3').on('click', () =>{console.log('column3')});
// $('#column4').on('click', () =>{console.log('column4')});
// $('#column5').on('click', () =>{console.log('column5')});
// $('#column6').on('click', () =>{console.log('column6')});
// $('#column7').on('click', () =>{console.log('column7')});

// $('.circle').on('click', () =>{console.log($(event.currentTarget).attr('id'))});


//Win cases
// const winCases = [
//   ['', '', '', ''];

//Prompt who wins

//Keep score of who wins each of 3 rounds




//Make a reset function to run when you start game





// });
// });
