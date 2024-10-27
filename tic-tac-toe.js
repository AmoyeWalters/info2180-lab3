
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null); // Initialize the game state array

    squares.forEach(function(square, index) {
        // Exercise 1: Add the 'square' class to each div
        square.classList.add('square');

        // Exercise 2: Add event listener to each square
        square.addEventListener('click', function() {
            if (!square.textContent) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer; // Update the game state array
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });
});
