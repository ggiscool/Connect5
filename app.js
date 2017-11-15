console.log("we have the meat$");

//Define initial variables-----------------------------------------------
  let alternate = true;
  const $youWin = $('<div>').addClass('youWin').text('YOU WIN GREAT JOB');
  // const $turnBox = $('<div>').addClass('turnBox');
  const $player1Turn = $('<div>').addClass('player1Turn').text('Player 1, it\'s your turn!');
  const $player2Turn = $('<div>').addClass('player2Turn').text('Player 2, it\'s your turn!');
  const $resetButton = $('#RESET');



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
        $test.eq(i).css('background-color', 'red').attr('value', 'clickedRed').attr('player', 'Player 1');
        // console.log("Player1");
        $player1Turn.css('display', 'none');
        $player2Turn.css('display', 'block');

        alternate = false;

        //call checkWin fxns------------------------
        checkWinsL($test, i, $circle);
        checkWinsR($test, i, $circle);
        checkLoopsLR();
        checkWinsU($test, i, $circle);
        checkWinsD($test, i, $circle);
        checkLoopsUD();
        checkWinsDRU($test, i, $circle);
        checkWinsDLD($test, i, $circle);
        checkLoopsDRUDLD();
        checkWinsDLU($test, i, $circle);
        checkWinsDRD($test, i, $circle);
        checkLoopsDLUDRD();

          //if no wins in 56 clicks, prompt as stalemate
          //while clicked val class === clicked val class, increase counts by 1
        return 0;

      }else if(alternate === false){
        $test.eq(i).css('background-color', 'blue').attr('value', 'clickedBlue').attr('player', 'Player 2');
        // console.log("Player2");
        $player2Turn.css('display', 'none');
        $player1Turn.css('display', 'block');
        alternate = true;
        //call checkWin fxns-------------------------------
        checkWinsL($test, i, $circle);
        checkWinsR($test, i, $circle);
        checkLoopsLR();
        checkWinsU($test, i, $circle);
        checkWinsD($test, i, $circle);
        checkLoopsUD();
        checkWinsDRU($test, i, $circle);
        checkWinsDLD($test, i, $circle);
        checkLoopsDRUDLD();
        checkWinsDLU($test, i, $circle);
        checkWinsDRD($test, i, $circle);
        checkLoopsDLUDRD();
        //if no wins in 56 clicks, prompt as stalemate
        return 0;
        };
      };
    };
  };

// const $resetButton.on('click', () =>{
//   $test.eq(i).css('background-color').remove();
//   generateBoard();
// };

//Set loop variables----------------------------------------
//Left & Right
let $loopCountL = 0;
let $loopCountR = 0;

//Up & Down
let $loopCountU = 0;
let $loopCountD = 0;

//Diagonal Right
let $loopCountDRU = 0;
let $loopCountDLD = 0;

//Diagonal Left
let $loopCountDLU = 0;
let $loopCountDRD = 0;

//Check Win fxns----------------------------------------------
//CHECKS SECTOR 1
//CHECK TO THE LEFT-----------------------------
const checkWinsL = ($test, i, $circle) => {
    $loopCountL = 0;
    let $currentElem = $test.eq(i);
    let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
    let $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1])];
    let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
    let $sideElem = $('#' + $newId);//full element to the left of clicked
    let top = 0;
    console.log($currentElem.attr('value'));
    console.log('new coords', $newCoordinateArr);
    console.log('to the left', $newId);
    console.log($sideElem);
        while($currentElem.attr('value')  === $sideElem.attr('value')) { //while clicked element and to the left are the same color
          $currentElem = $sideElem;
          // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
          $coordinatesArr = $newCoordinateArr;
          $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1])];
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
        let $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1])];
        let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
        let $sideElem = $('#' + $newId);
        let top = 0;
        console.log('to the right', $newId);
        console.log('new coords', $newCoordinateArr);
        console.log($sideElem);

            while($currentElem.attr('value')  === $sideElem.attr('value')) {
              $currentElem = $sideElem;
              // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
              $coordinatesArr = $newCoordinateArr;
              $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1])];
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
        // prompt($test.eq(i).attr('player') + "wins!");
        console.log('winner winner!');
        $youWin.css('display', 'block');
      };
    };
//-------------------------------------------------
//CHECKS SECTOR 2
//CHECK TO THE UP----------------------------------
const checkWinsU = ($test, i, $circle) => {
    $loopCountU = 0;
    let $currentElem = $test.eq(i);
    let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
    let $newCoordinateArr = [parseInt($coordinatesArr[0]), parseInt($coordinatesArr[1]) - 1];
    let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
    let $sideElem = $('#' + $newId);//full element to the left of clicked
    let top = 0;
    // console.log($currentElem.attr('value'));
    console.log('to the up', $newId);
    console.log('new coords', $newCoordinateArr);
    console.log($sideElem);
        while($currentElem.attr('value')  === $sideElem.attr('value')) {//while clicked element & left are the same color
          $currentElem = $sideElem;
          // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
          $coordinatesArr = $newCoordinateArr;
          $newCoordinateArr = [parseInt($coordinatesArr[0]), [parseInt($coordinatesArr[1])] - 1];
          $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
          $sideElem = $('#' + $newId);
          console.log($sideElem);

          $loopCountU++;
          //Infinite loop prevention
          top++;
          if(top > 10){
            break;
          };
          console.log('current', $currentElem);
        };
          console.log('loopcount up', $loopCountU);
        };

//CHECK TO THE DOWN---------------------------------
const checkWinsD = ($test, i, $circle) => {
        $loopCountD = 0;
        let $currentElem = $test.eq(i);
        let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
        let $newCoordinateArr = [parseInt($coordinatesArr[0]), parseInt($coordinatesArr[1]) + 1];
        let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
        let $sideElem = $('#' + $newId);
        let top = 0;
        console.log('to the down', $newId);
        console.log('new coords', $newCoordinateArr);
        console.log($sideElem);

            while($currentElem.attr('value')  === $sideElem.attr('value')) {
              $currentElem = $sideElem;
              // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
              $coordinatesArr = $newCoordinateArr;
              $newCoordinateArr = [parseInt($coordinatesArr[0]), parseInt($coordinatesArr[1]) + 1];
              $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
              $sideElem = $('#' + $newId);
              console.log($sideElem);

              $loopCountD++;
              //Infinite loop prevention
              top++;
              if(top > 10){
                break;
              };
              console.log('current', $currentElem);
            };
          console.log('loopcount down', $loopCountD);
        };
    const checkLoopsUD = () => {
      console.log($loopCountU, $loopCountD);
      if (($loopCountU + $loopCountD) >= 4){
        // prompt($test.eq(i) + "wins!")
        console.log('winner winner!');
        $youWin.css('display', 'block');
      };
    };


//CHECKS SECTOR 3
//CHECK TO THE DIAGONAL RIGHT UP----------------------------------
const checkWinsDRU = ($test, i, $circle) => {
    $loopCountDRU = 0;
    let $currentElem = $test.eq(i);
    let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
    let $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1]) - 1];
    let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
    let $sideElem = $('#' + $newId);//full element to the left of clicked
    let top = 0;
    // console.log($currentElem.attr('value'));
    console.log('to the diagonal right up', $newId);
    console.log('new coords', $newCoordinateArr);
    console.log($sideElem);
        while($currentElem.attr('value')  === $sideElem.attr('value')) {//while clicked element & left are the same color
          $currentElem = $sideElem;
          // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
          $coordinatesArr = $newCoordinateArr;
          $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1]) - 1];
          $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
          $sideElem = $('#' + $newId);
          console.log($sideElem);
          console.log('inside diagonal right up loop');

          $loopCountDRU++;
          //Infinite loop prevention
          top++;
          if(top > 10){
            break;
          };
          console.log('current', $currentElem);
        };
          console.log('loopcount diagonal right up', $loopCountDRU);
        };

//CHECK TO THE DIAGONAL LEFT DOWN---------------------------------
const checkWinsDLD = ($test, i, $circle) => {
        $loopCountDLD = 0;
        let $currentElem = $test.eq(i);
        let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
        let $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1]) + 1];
        let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
        let $sideElem = $('#' + $newId);
        let top = 0;
        console.log('to the diagonal left down', $newId);
        console.log('new coords', $newCoordinateArr);
        console.log($sideElem);

            while($currentElem.attr('value')  === $sideElem.attr('value')) {
              $currentElem = $sideElem;
              // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
              $coordinatesArr = $newCoordinateArr;
              $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1]) + 1];
              $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
              $sideElem = $('#' + $newId);
              console.log($sideElem);
              console.log('inside diagonal left down loop');


              $loopCountDLD++;
              //Infinite loop prevention
              top++;
              if(top > 10){
                break;
              };
              console.log('current', $currentElem);
            };
          console.log('loopcount diagonal left down', $loopCountDLD);
        };
    const checkLoopsDRUDLD = () => {
      console.log($loopCountDRU, $loopCountDLD);
      if (($loopCountDRU + $loopCountDLD) >= 4){
        // prompt($test.eq(i) + "wins!")
        console.log('winner winner!');
        $youWin.css('display', 'block');
      };
    };

  //CHECKS SECTOR 4
  //CHECK TO THE DIAGONAL LEFT UP----------------------------------
  const checkWinsDLU = ($test, i, $circle) => {
      $loopCountDLU = 0;
      let $currentElem = $test.eq(i);
      let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
      let $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1]) - 1];
      let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1]; //ID for circle to the left of clicked
      let $sideElem = $('#' + $newId);//full element to the left of clicked
      let top = 0;
      // console.log($currentElem.attr('value'));
      console.log('to the diagonal left up', $newId);
      console.log('new coords', $newCoordinateArr);
      console.log($sideElem);
          while($currentElem.attr('value')  === $sideElem.attr('value')) {//while clicked element & left are the same color
            $currentElem = $sideElem;
            // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
            $coordinatesArr = $newCoordinateArr;
            $newCoordinateArr = [parseInt($coordinatesArr[0]) - 1, parseInt($coordinatesArr[1]) - 1];
            $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
            $sideElem = $('#' + $newId);
            console.log($sideElem);
            console.log('inside diagonal left up loop');

            $loopCountDLU++;
            //Infinite loop prevention
            top++;
            if(top > 10){
              break;
            };
            console.log('current', $currentElem);
          };
            console.log('loopcount diagonal left up', $loopCountDLU);
          };

  //CHECK TO THE DIAGONAL RIGHT DOWN---------------------------------
  const checkWinsDRD = ($test, i, $circle) => {
          $loopCountDRD = 0;
          let $currentElem = $test.eq(i);
          let $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
          let $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1]) + 1];
          let $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
          let $sideElem = $('#' + $newId);
          let top = 0;
          console.log('to the diagonal right down', $newId);
          console.log('new coords', $newCoordinateArr);
          console.log($sideElem);

              while($currentElem.attr('value')  === $sideElem.attr('value')) {
                $currentElem = $sideElem;
                // $coordinatesArr = [$circle.attr('column'), $circle.attr('row')];
                $coordinatesArr = $newCoordinateArr;
                $newCoordinateArr = [parseInt($coordinatesArr[0]) + 1, parseInt($coordinatesArr[1]) + 1];
                $newId = 'column' + $newCoordinateArr[0] + 'row' + $newCoordinateArr[1];
                $sideElem = $('#' + $newId);
                console.log($sideElem);
                console.log('inside diagonal right dwon loop');

                $loopCountDRD++;
                //Infinite loop prevention
                top++;
                if(top > 10){
                  break;
                };
                console.log('current', $currentElem);
              };
            console.log('loopcount diagonal right down', $loopCountDRD);
          };
      const checkLoopsDLUDRD = () => {
        console.log($loopCountDLU, $loopCountDRD);
        if (($loopCountDLU + $loopCountDRD) >= 4){
          console.log('winner winner!');
          $youWin.css('display', 'block');
          // prompt($test.eq(i) + "wins!")
        };
      };

//Pseudocode for the rest of the game------------------------

//Prompt who wins

//Make a reset function to run when you start game

//End pseudocode----------------------------------------------
//Windows Onload
$(() => {
  $('.turnBox').append($player1Turn);
  $('.turnBox').append($player2Turn);


  //Call the fxn to make the game board
  generateBoard();

//Show that someone won
$('.gameBoard').append($youWin);

  //Run game logic fxn when circles are clicked
  $('.circle').on('click', playersTakeTurns);

//Reset page by refresh
  $('#RESET').on('click',() =>{
    location.reload()
    console.log('trying to reset');
  });

  });
