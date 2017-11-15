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

//Define initial variables-----------------------------------------------
  let alternate = true;
  // let gameEnd = false;

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
      $circle.attr('id', 'column' + (i + 1) + 'row' + (j + 1));
      $circle.attr('column', (i+1))
      $circle.attr('row', (j+1))
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
  for (let i = ($test.length - 1); i >= 0; i--) {
    const $circle = $test.eq(i);
//If the clicked piece has no value, then toggle between Player 1 (red), and Player 2, (blue).
    if(!$test.eq(i).attr('value')){
      if( alternate === true){
        $test.eq(i).css('background-color', 'red').attr('value', 'clickedRed');
        // console.log("Player1");
        //Show text Player 1, it's your turn!
        alternate = false;

//call checkWin fxn------------------------

        checkWinsL($test, i, $circle);
        checkWinsR($test, i, $circle);
        checkLoopsLR();
        // checkWinsU($test, i, $circle);
        // checkWinsD($test, i, $circle);
        // checkLoopsUD();

          //if no wins in 56 clicks, prompt as stalemate
          //while clicked val class === clicked val class, increase counts by 1
        return 0;

      }else if(alternate === false){
        $test.eq(i).css('background-color', 'blue').attr('value', 'clickedBlue');
        // console.log("Player2");
        //Show text Player 2, it's your turn!
        alternate = true;
//call checkWin fxn-------------------------------
        checkWinsL($test, i, $circle);
        checkWinsR($test, i, $circle);
        checkLoopsLR();
        // checkWinsU($test, i, $circle);
        // checkWinsD($test, i, $circle);
        // checkLoopsUD();
        //if no wins in 56 clicks, prompt as stalemate
        return 0;
        };
      };
    };
  };
// }


//Check Win fxn----------------------------------------------
//Left & Right
let $loopCountL = 0;
let $loopCountR = 0;

//Up & Down
let $loopCountU = 0;
let $loopCountD = 0;

//Diagonal Right
let $loopCountDRU = 0;
let $loopCountDRD = 0;

//Diagonal Left
let $loopCountDLU = 0;
let $loopCountDLD = 0;


//CHECKS SECTOR 1
//CHECK TO THE LEFT-----------------------------
const checkWinsL = ($test, i, $circle) => {
    $loopCountL = 0;
    let $currentElem = $test.eq(i);
    let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
    let $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, $coordinatesArr[1]];
    let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
    let $sideElem = $('#' + $newId);//full element to the left of clicked
    let top = 0;
    console.log($currentElem.attr('value'));
    console.log('to the left', $newId);
    console.log($sideElem);
        while($currentElem.attr('value')  === $sideElem.attr('value')) { //while clicked element and to the left are the same color
          $currentElem = $sideElem;
          // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
          $coordinatesArr = $newCoordinateArr;
          $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, $coordinatesArr[1]];
          $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
          $sideElem = $('#' + $newId);
          console.log($sideElem);

          $loopCountL++;
          //Infinite loop prevention
          top++;
          if(top > 10){
            break;
          };
          console.log('current', $currentElem);
          console.log('inside of left while loop');
        };
          console.log('loopcount left', $loopCountL);
        };

//CHECK TO THE RIGHT---------------------------------
const checkWinsR = ($test, i, $circle) => {
        $loopCountR = 0;
        let $currentElem = $test.eq(i);
        let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
        let $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, $coordinatesArr[1]];
        let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
        let $sideElem = $('#' + $newId);
        let top = 0;
        console.log('to the right', $newId);
        console.log($sideElem);

            while($currentElem.attr('value')  === $sideElem.attr('value')) {
              $currentElem = $sideElem;
              // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
              $coordinatesArr = $newCoordinateArr;
              $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, $coordinatesArr[1]];
              $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
              $sideElem = $('#' + $newId);
              console.log($sideElem);

              $loopCountR++;
              //Infinite loop prevention
              top++;
              if(top > 10){
                break;
              };
              console.log('current', $currentElem);
              console.log('inside of right while loop');
            };
          console.log('loopcount right', $loopCountR);
        };
    const checkLoopsLR = () => {
      console.log($loopCountL, $loopCountR);
      if (($loopCountL + $loopCountR) >= 4){
        console.log('winner winner!');
      };
    };
//-------------------------------------------------
//CHECKS SECTOR 2
//CHECK TO THE UP----------------------------------
// const checkWinsU = ($test, i, $circle) => {
//     $loopCountU = 0;
//     let $currentElem = $test.eq(i);
//     let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
//     let $newCoordinateArr = [$coordinatesArr[0], parseInt($coordinatesArr[1]) + 1];
//     let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
//     let $sideElem = $('#' + $newId);//full element to the left of clicked
//     let top = 0;
//     console.log($currentElem.attr('value'));
//     console.log('to the left', $newId);
//     console.log($sideElem);
//         while($currentElem.attr('value')  === $sideElem.attr('value')) {//while clicked element & left are the same color
//           $currentElem = $sideElem;
//           // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
//           $coordinatesArr = $newCoordinateArr;
//           $newCoordinateArr = [$coordinatesArr[0], [parseInt($coordinatesArr[1])] + 1];
//           $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
//           $sideElem = $('#' + $newId);
//           console.log($sideElem);
//
//           $loopCountU++;
//           //Infinite loop prevention
//           top++;
//           if(top > 10){
//             break;
//           };
//           console.log('current', $currentElem);
//         };
//           console.log('loopcount up', $loopCountU);
//         };
//
// //CHECK TO THE DOWN---------------------------------
// const checkWinsD = ($test, i, $circle) => {
//         $loopCountD = 0;
//         let $currentElem = $test.eq(i);
//         let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
//         let $newCoordinateArr = [$coordinatesArr[0], [parseInt($coordinatesArr[1])] - 1];
//         let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
//         let $sideElem = $('#' + $newId);
//         let top = 0;
//         console.log('to the right', $newId);
//         console.log($sideElem);
//
//             while($currentElem.attr('value')  === $sideElem.attr('value')) {
//               $currentElem = $sideElem;
//               // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
//               $coordinatesArr = $newCoordinateArr;
//               $newCoordinateArr = [$coordinatesArr[0], [parseInt($coordinatesArr[1])] - 1];
//               $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
//               $sideElem = $('#' + $newId);
//               console.log($sideElem);
//
//               $loopCountD++;
//               //Infinite loop prevention
//               top++;
//               if(top > 10){
//                 break;
//               };
//               console.log('current', $currentElem);
//             };
//           console.log('loopcount down', $loopCountD);
//         };
//     const checkLoopsUD = () => {
//       console.log($loopCountU, $loopCountD);
//       if (($loopCountU + $loopCountD) >= 4){
//         console.log('winner winner!');
//       };
//     };
//   const checkWinsUD = () => {
//
//   }
//   const checkWinDR = () => {
//
//   }
//   const checkWinDL = () => {
//
//   };
// };

//Pseudocode for the rest of the game------------------------
//Win cases


//Prompt who wins


//Make a reset function to run when you start game

//End pseudocode----------------------------------------------

//WIndows Onload
$(() => {

  //Call the fxn to make the game board
  generateBoard();


  $('.circle').on('click', playersTakeTurns);

  // console.log($(event.currentTarget));


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
// $('.circle').on('click', playersTakeTurns);




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
