import { Component, OnInit } from '@angular/core';
// import {$} from 'jquery';
declare var $: any;
import {CommonService} from "../../services/common.service";
@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrls: ['./puzzle.component.scss']
})
export class PuzzleComponent implements OnInit {

  constructor(private common : CommonService){}
  
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    $('document').ready(function() {
      console.log("ready");
      var board = [0,1,2,3,4,5,6,7,8];
      var gameWon = false;
      var open = [];
      var closed = [];
      var moves = 0;
      var showAnswers = false;
      var interval;
      var answerInterval;
      var counter = 0;
      var solving = false;
      var hintGiven = false;
  
      function Node(boardArray) {
          this.manDistance = -1;
          this.numbers = boardArray;
          this.fOfx = -1;
          this.moves = [];
  
          this.calcHeuristics = function() {
              this.manDistance = 0;
  
              for (var i = 0; i < 9; i++) {
                  var x = Math.max(i, this.numbers[i] - 1);
                  var y = Math.min(i, this.numbers[i] - 1);
                  if (this.numbers[i] == 0) {
                      x = y;
                  }
                  while (parseInt(x / 3+'') != parseInt(y / 3+'')) {
                      x -= 3;
                      this.manDistance++;
                  }
                  this.manDistance += Math.abs(x - y);
              }
  
              this.fOfx = parseInt(this.manDistance) + parseInt(this.moves.length);
          };
      }
  
      function changeColor() {
          $(this).toggleClass('lighttile');
      };
  
      function makeNewPuzzle() {
          $('.sidebar2').hide();
          stopAnswers();
          gameWon = false;
          moves = 0;
          $('.blank').removeClass('blank');
          for (var i = 0; i < board.length; i++) {
              var index = Math.floor(Math.random() * 8);
              var temp = board[i];
              board[i] = board[index];
              board[index] = temp;
          }
  
          ensureSolvability();
      };
  
      function ensureSolvability() {
              var total = 0;
              var zeroIndex = -1;
              for (var i = 0; i < 8; i++) {
                  for (var j = i + 1; j < 9; j++) {
                      if (board[i] == 0 || board[j] == 0) {
                          if (board[i] == 0) {
                              zeroIndex = i;
                          }
                          else {
                              zeroIndex = j;
                          }
                          total += 0;
                      }
                      else {
                          if (board[j] < board[i]) {
                              total += 1;
                          }
                      }
                  }
              }
  
              if (total % 2 != 0) {
                  if (zeroIndex < 7) {
                      var temp = board[8];
                      board[8] = board[7];
                      board[7] = temp;
                  }
                  else if (zeroIndex == 7) {
                      var temp = board[8];
                      board[8] = board[6];
                      board[6] = temp;
                  }
                  else {
                      var temp = board[6];
                      board[6] = board[7];
                      board[7] = temp;
                  }
              }
  
              for (var i = 0; i < 9; i++) {
                  var y:any = document.getElementById("sq" + i);
                  if (board[i] == 0) {
                      y.className = y.className + " blank";
                      y.innerHTML = "";
                  }
                  else {
                      y.innerHTML = board[i];
                  }
              }
  
          };
  
      function addStateToQueue(addToQueue) {
          var added = false;
          for (var i = 0; i < open.length; i++) {
              if (addToQueue.numbers == open[i].numbers) {
                  added = true;
                  if (addToQueue.fOfx < open[i].fOfx) {
                      open.splice(i, 1);
                      open.push(addToQueue);
                  }
              }
          }
  
          for (var i = 0; i < closed.length; i++) {
              if (addToQueue.numbers == closed[i].numbers) {
                  added = true;
                  if (addToQueue.fOfx < closed[i].fOfx) {
                      closed.splice(i, 1);
                      open.push(addToQueue);
                  }
              }
          }
  
          if (added == false) {
              open.push(addToQueue);
          }
      };
  
      function solvePuzzle() {
  
          if (open.length != 0) {
              open.splice(0, open.length);
          }
          if (closed.length != 0) {
              closed.splice(0, closed.length);
          }
  
          var initialState = new Node(board);
          initialState.calcHeuristics();
          open.push(initialState);
  
          while (open[0].manDistance != 0) {
  
              for (var i = 0; i < 9; i++) {
                  if (open[0].numbers[i] == 0) {
                     var blankid = i;
                  }
              }
  
              for (var i = 0; i < 9; i++) {
                  if ((i - 3 == blankid) || (i + 3 == blankid) ||
                      (parseInt(i / 3+"") == parseInt(blankid / 3+"") && (Math.abs(i - blankid) == 1))) {
                          var nextMove = open[0].numbers[i];
                          var nextBoard = open[0].numbers.slice();
                          var temp = nextBoard[i];
                          nextBoard[i] = nextBoard[blankid];
                          nextBoard[blankid] = temp;
                          var addToQueue = new Node(nextBoard);
                          addToQueue.moves = open[0].moves.slice();
                          addToQueue.moves.push(nextMove);
                          addToQueue.calcHeuristics();
                          if (nextMove != open[0].moves[open[0].moves.length - 1]) {
                              addStateToQueue(addToQueue);
                          }
                  }
              }
              closed.push(open[0]);
              open.shift();
              open.sort(function(c, d) {
                  return c.fOfx - d.fOfx;
              });
          }
          if (showAnswers) {
              var thisid = returnId();
              interval = setInterval(function() {highlightAnswers(thisid);}, 500);
          }
      };
  
      function calculateMD(boardArray) {
          var mDistance = 0;
  
              for (var i = 0; i < 9; i++) {
                  var x = Math.max(i, boardArray[i] - 1);
                  var y = Math.min(i, boardArray[i] - 1);
                  if (boardArray[i] == 0) {
                      x = y;
                  }
                  while (parseInt(x / 3+"") != parseInt(y / 3+"")) {
                      x -= 3;
                      mDistance++;
                  }
                  mDistance += Math.abs(x - y);
              }
  
              return mDistance;
      };
  
      function makeSwap() {
          var blankid = parseInt($('.blank').attr('id')[2]);
          var thisid:any = -1;
          var x = -1;
          var nextMove = open[0].moves[counter];
          for (var i = 0; i < 9; i++) {
              if (board[i] == nextMove) {
                  thisid = document.getElementById('sq' + i);
                  x = i;
              }
          }
          var temp = board[x];
          board[x] = board[blankid];
          board[blankid] = temp;
          $('.blank').addClass('tile');
          $('.blank').html($(thisid).html());
          $('.blank').removeClass('blank');
          $(thisid).addClass('blank');
          $(thisid).removeClass('tile');
          $(thisid).html("");
          counter++;
          moves++;
          if (calculateMD(board) == 0) {
              clearInterval(answerInterval);
              $('.sidebar2').html("It took you " + moves + " moves, but was it really you?");
              $('.sidebar2').show();
              console.log("code is ");
              alert("code is ");
              solving = false;
          }
      };
  
      function highlightAnswers(thisid) {
          $(thisid).toggleClass('answers');
      };
  
      function returnId() {
          for (var i = 0; i < 9; i++) {
              if (board[i] == open[0].moves[0]) {
                  return document.getElementById("sq" + i);
              }
          }
      };
  
      function stopAnswers() {
          clearInterval(interval);
          $('.answers').removeClass('answers');
      }
  
      makeNewPuzzle();
      solvePuzzle();
  
      $('#hint').on('click', function() {
          if (!gameWon && !showAnswers && !hintGiven) {
              var thisid = returnId();
              interval = setInterval(function() {highlightAnswers(thisid);}, 500);
              hintGiven = true;
          }
      });
  
      $('#answers').on('click', function() {
          $(this).toggleClass('darkanswer');
          stopAnswers();
          if (showAnswers) {
              showAnswers = false;
          }
          else {
              showAnswers = true;
              if (!gameWon && !solving) {
                  var thisid = returnId();
                  interval = setInterval(function() {highlightAnswers(thisid);}, 500);
              }
          }
      });
  
      $('.tile').on('mouseenter', changeColor).on('mouseleave', changeColor);
  
      $('#newGame').on('click', function() {
          if (!solving) {
              $('.blank').addClass('tile');
              $('.blank').removeClass('blank');
              makeNewPuzzle();
              solvePuzzle();
          }
      });
  
      $('#autosolve').on('click', function() {
          stopAnswers();
          if (!gameWon) {
              solving = true;
              counter = 0;
              answerInterval = setInterval(makeSwap, 500);
              gameWon = true;
          }
      });
  
      $('.tile').on('click', function() {
          var thisid:any = parseInt($(this).attr('id')[2]);
          var blankid:any = parseInt($('.blank').attr('id')[2]);
  
          if (gameWon == false &&
              ((thisid - 3 == blankid) ||
              (thisid + 3 == blankid) ||
              ((parseInt(thisid / 3+'') == parseInt(blankid / 3+'')) && (Math.abs(thisid - blankid) == 1)))) {
                  moves++;
                  hintGiven = false;
                  stopAnswers();
                  var temp = board[thisid];
                  board[thisid] = board[blankid];
                  board[blankid] = temp;
                  solvePuzzle();
                  $('.blank').addClass('tile');
                  $('.blank').html($(this).html());
                  $('.blank').removeClass('blank');
                  $(this).addClass('blank');
                  $(this).removeClass('tile');
                  $(this).html("");
                  if (calculateMD(board) == 0) {
                      $('.sidebar2').html("You won the game in " + moves + " moves!");
                      $('.sidebar2').show();
                    console.log("ready");
                    alert("code is ");
                      gameWon = true;
                  }
          }
      });
  });
  }

}
