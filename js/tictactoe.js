/*

    N220 Section 25750
    Harmanjot Singh
    Tic Tac Toe
    21 April 2020

*/

"use strict";

// object to store the controls
const controls = {
    // intially set the X player to true
    isXPlayerMoving: true
}

// declare the 2-d string array game board
let gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// main function
function main() {
    if (document.querySelector) {
        // grab the main table element and all of its children
        let ticTacToeElement = document.querySelector("#main-table");
        // add 1 event handler to every button
        ticTacToeElement.addEventListener("click", playGame);
    }
}

// play the game function
function playGame(event) {
    // grab each button
    let targetElement = event.target;

    // grab the parent of each button which is "td" in this case
    let parentElement = targetElement.parentElement;
    // row and column variables
    let row, column;
    
	// if the target element is button, which it is when a button gets clicked
	if (targetElement.nodeName == "BUTTON") {
        // grab the data-row for the clicked button
        row = Number(targetElement.dataset.row);
    
        // grab the data-column for the clicked button
        column = Number(targetElement.dataset.column);
        
        // if the current player is X, store 1. Otherwise store -1. Also change the isXPlayerMoving to true or false
        gameBoard[row][column] = controls.isXPlayerMoving ? 1 : -1;
        
        // if its X player's turn, change the text to x to reflect it on the board. Otherwise change it to o
        parentElement.innerHTML = controls.isXPlayerMoving ? "x" : "o";
        
        // if isXPlayerMoving is true, change "td" class to xPlayer. Otherwise change it to oPlayer
		parentElement.classList.add(controls.isXPlayerMoving ? "xPlayer" : "oPlayer");
        
        // check the checkWinner function if it is true, which it will be when there is a winner
		if (checkWinner()) {
            alert((controls.isXPlayerMoving ? "X" : "O") + " wins!");
            location.reload();
		}
		else { // otherwise keep running the game
            controls.isXPlayerMoving = !controls.isXPlayerMoving;
		}
	}
}

// winner function using for loops
function checkWinner() {
    // declare the 
    let counter;
    
    // keep executing this outer loop unitl we reach 3 in counting
	for (let i = 0; i < 3; i++) {
        // set the counter to 0
        counter = 0;

        // keep executing this inner loop unitl we reach 3 in counting
		for (let j = 0; j < 3; j++) {
            // keep incrementing the counter based on gameboard indexes
            counter += gameBoard[i][j];
		}
        
        // make the counter positive if it is negative. Finally, check if it equals 3 and return true.
		if (Math.abs(counter) == 3) {
			return true;
		}
	}
    
    // keep executing this outer loop unitl we reach 3 in counting
	for (let j = 0; j < 3; j++) {
        // set the counter to 0
        counter = 0;

        // keep executing this inner loop unitl we reach 3 in counting
		for (let i = 0; i < 3; i++) {
            // if this counter reaches 3, then X wins. If counter reaches -3 then O wins
            counter += gameBoard[i][j];
		}
        
        // make the counter positive if it is negative. Finally, check if it equals 3 and return true.
		if (Math.abs(counter) == 3) {
			return true;
		}
	}

    // set the counter to 0
    counter = 0;

    // keep executing this loop unitl we reach 3 in counting
	for (let i = 0; i < 3; i++) {
        // keep incrementing the counter based on gameboard indexes
        counter += gameBoard[i][i];
	}

    // make the counter positive if it is negative. Finally, check if it equals 3 and return true.
	if (Math.abs(counter) == 3) {
		return true;
	}

    // set counter to 0
    counter = 0;

    // keep executing this loop unitl we reach 3 in counting
	for (let i = 0; i < 3; i++) {
        // keep incrementing the counter based on gameboard indexes
        counter += gameBoard[i][2 - i];
	}

    // make the counter positive if it is negative. Finally, check if it equals 3 and return true.
	if (Math.abs(counter) == 3) {
		return true;
	}
	return false;
}
 