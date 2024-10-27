
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null); // Initialize the game state array
    const statusDiv = document.getElementById('status');

    const winningCombinations = [
        [0, 1, 2], // Top row
        [3, 4, 5], // Middle row
        [6, 7, 8], // Bottom row
        [0, 3, 6], // Left column
        [1, 4, 7], // Middle column
        [2, 5, 8], // Right column
        [0, 4, 8], // Diagonal from top-left to bottom-right
        [2, 4, 6]  // Diagonal from top-right to bottom-left
    ];

    function checkWinner() {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    function updateStatus(winner) {
        statusDiv.textContent = `Congratulations! ${winner} is the Winner!`;
        statusDiv.classList.add('you-won');
    }

    squares.forEach(function(square, index) {
        // Exercise 1: Add the 'square' class to each div
        square.classList.add('square');

        // Exercise 2: Add event listener to each square
        square.addEventListener('click', function() {
            if (!square.textContent && !statusDiv.classList.contains('you-won')) {
                square.textContent = currentPlayer;
                square.classList.add(currentPlayer);
                gameState[index] = currentPlayer; // Update the game state array
                const winner = checkWinner();
                if (winner) {
                    updateStatus(winner);
                } else {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                }
            }
        });

        // Exercise 3: Add mouseover and mouseout event listeners to each square
        square.addEventListener('mouseover', function() {
            if (!square.textContent) {
                square.classList.add('hover');
            }
        });

        square.addEventListener('mouseout', function() {
            square.classList.remove('hover');
        });
    });
});
