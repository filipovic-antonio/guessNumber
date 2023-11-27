let secretNumber= Math.floor(Math.random() * 20) + 1;
let decreaseScore = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    console.log(guess, typeof guess);
   
    if(!guess) {
        displayMessage('⛔ No Number');

    //If player wins
    } else if(guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('🎉 Correct Number!');   
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(decreaseScore > highscore) {
            highscore = decreaseScore;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    //If player lose
    } else if (guess !== secretNumber) {
        if(decreaseScore > 1) {
            displayMessage(guess > secretNumber ? '📈 To high!' : '📉 To low!');
            decreaseScore--;
            document.querySelector('.score').textContent = decreaseScore;
        } else {
            document.querySelector('.message').textContent = '🥲 You lose the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});

//If player press again button
document.querySelector('.again').addEventListener('click', function() {
    decreaseScore = 20; 
    secretNumber= Math.floor(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = decreaseScore = 20; 
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

