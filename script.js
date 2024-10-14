// Memory Game with DOM Manipulation and Events

// List of emojis for the game
const emojis = ['😊', '😊', '❤️', '❤️', '😍', '😍', '👍', '👍', '✌️', '✌️', '😎', '😎', '😉', '😉', '⛷️', '⛷️'];

// Shuffle emojis
const shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

// Create game board
const gameContainer = document.querySelector('.game');
function createGameBoard() {
    shuffledEmojis.forEach((emoji) => {
        const box = document.createElement('div');
        box.className = 'item';
        box.innerHTML = emoji;
        gameContainer.appendChild(box);
    });
}

// Game logic
let firstBox = null;
let secondBox = null;
let isChecking = false;

function handleBoxClick(e) {
    const clickedBox = e.target;

    // Ignore clicks on already matched or open boxes
    if (clickedBox.classList.contains('boxopen') || clickedBox.classList.contains('boxmatch') || isChecking) {
        return;
    }

    // Reveal the box
    clickedBox.classList.add('boxopen');

    // Check if this is the first or second box clicked
    if (!firstBox) {
        firstBox = clickedBox;
    } else {
        secondBox = clickedBox;
        isChecking = true;

        // Compare the two boxes
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (firstBox.innerHTML === secondBox.innerHTML) {
        // Match found
        firstBox.classList.add('boxmatch');
        secondBox.classList.add('boxmatch');
    } else {
        // No match, hide boxes again
        firstBox.classList.remove('boxopen');
        secondBox.classList.remove('boxopen');
    }

    // Reset selections
    firstBox = null;
    secondBox = null;
    isChecking = false;

    // Check if the game is won
    if (document.querySelectorAll('.boxmatch').length === emojis.length) {
        setTimeout(() => {
            alert('Congratulations! You win!');
        }, 200);
    }
}

// Attach event listener to game container
gameContainer.addEventListener('click', handleBoxClick);

// Initialize the game
createGameBoard();
