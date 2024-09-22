//Dom js functions//

const emojis = ['😊', '😊', '❤️', '❤️', '😍', '😍', '👍', '👍', '✌️', '✌️', '😎', '😎', '😉', '😉', '⛷️', '⛷️'];

// Shuffle emojis
var shuf_emojis = emojis.sort(() => (Math.random() > 0.5) ? 1 : -1);

// Create game board
for (var i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuf_emojis[i];

    box.onclick = function () {
        
        if (this.classList.contains('boxopen') || this.classList.contains('boxmatch')) {
            return;
        }
        
        this.classList.add('boxopen');
        
        setTimeout(function () {
            const openBoxes = document.querySelectorAll('.boxopen');

            if (openBoxes.length > 1) {
                if (openBoxes[0].innerHTML === openBoxes[1].innerHTML) {
                    // Add the 'boxmatch' class to both matched boxes
                    openBoxes[0].classList.add('boxmatch');
                    openBoxes[1].classList.add('boxmatch');

                   
                    openBoxes[0].classList.remove('boxopen');
                    openBoxes[1].classList.remove('boxopen');

                   
                    if (document.querySelectorAll('.boxmatch').length === emojis.length) {
                        setTimeout(() => {
                            alert('Congratulations! You win!');
                        }, 200); // Delay for smooth transition
                    }
                } else {
                    
                    setTimeout(() => {
                        openBoxes[0].classList.remove('boxopen');
                        openBoxes[1].classList.remove('boxopen');
                    }, 500);
                }
            }
        }, 500);
    };

    document.querySelector('.game').appendChild(box);
}
