
document.addEventListener('DOMContentLoaded', function() {
    const squares = document.querySelectorAll('#board div');
    let currentPlayer = 'X';
    const gameState = Array(9).fill(null); // Initialize the game state array
    const statusDiv = document.getElementById('status');
    const newGameButton = document.getElementsByClassName('btn') [0]; // Select the New Game button
    
   

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

    function resetGame() {
        gameState.fill(null); // Reset the game state array
        squares.forEach(function(square) {
            square.textContent = ''; // Clear the text content of each square
            square.classList.remove('X', 'O'); // Remove the X and O classes
        });
        statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.'; // Clear the status message
        statusDiv.classList.remove('you-won'); // Remove the you-won class
        currentPlayer = 'X'; // Reset the current player to 
        
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
                const winner = checkWinner(); // Check for a winner
                if (winner) {
                    updateStatus(winner); // Update the status if there's a winner
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

    // Exercise 5: Add event listener to the New Game button
    newGameButton.addEventListener('click', resetGame);
});
