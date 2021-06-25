'use strict';

let score = 5;

let highscore = [0,0];

let numplayers = Number(prompt('Number of players'));

let players = [];

for (let i = 0; i <= numplayers-1; i++){

    players[i] = prompt('player name:   ');

};

console.log(players);

let [player1,player2,player3,player4,player5,player6,player7,player8,player9,player10] = players;

console.log(player1);

let secretNumber = Math.trunc(Math.random()*20)+1;

secretNumber === 10? secretNumber = Math.trunc(Math.random()*20)+1: secretNumber = secretNumber;

//console.log(`Theory behind roll dice function:  0,0.1,0.2,0.3,0.4,0.6,0.7,0.8,0.9,0.10,0.11,0.12,0.13,0.14,0.15,0.16,0.17,0.18,0.19, => 0+1,1+1,2+1,3+1,4+1,5+1,6+1,7+1,8+1,9+1,10+1,11+1,12+1,13+1,14+1,15+1,16+1,17+1,18+1,19+1, = 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19.20`);


//let numplayers = prompt('Number ')

//let player1 = prompt('input player name');

//let secretNumber = Number(prompt('enter secret number'));

//document.querySelector('.number').textContent = secretNumber;


let i = 0;

alert(`${players[i]}'s turn`);

document.querySelector('.score').textContent = score;

if (secretNumber > 10){

    document.querySelector('.hint').textContent = '10 is too low';

} else if (secretNumber < 10){

    document.querySelector('.hint').textContent = '10 is too high';

}

document.querySelector('.check').addEventListener('click', function () {

    const guess =Number(document.querySelector('.guess').value);

    console.log(guess, typeof guess);

    if (guess === secretNumber) {
        
        document.querySelector('.message').textContent = '🎉 Correct Number!.... You won 🎉🎉';
        
        document.querySelector('.highscore').textContent < score? document.querySelector('.highscore').textContent = score : document.querySelector('.highscore').textContent = document.querySelector('.highscore').textContent
        
        highscore = document.querySelector('.highscore').textContent
        
        score = 0;
        
        document.querySelector('body').style.backgroundColor = '#60b347';
        
        document.querySelector('.game').textContent = secretNumber;
        
        console.log(i);
        
        if(players[i++]){
            i++;
        alert(`${players[i]}'s turn`);
        }

    } else if (score > 0 && guess !== secretNumber) {
        
        if (!guess) {
        
            document.querySelector('.message').textContent = '👎 no number entered';
        
        } else if (guess > secretNumber) {
        
            document.querySelector('.message').textContent = '📈 too high.';
        
            score--;
        
            document.querySelector('.score').textContent = score;
        
        } else if (guess < secretNumber) {
        
            document.querySelector('.message').textContent = '📉 too low.';
        
            score--;
        
            document.querySelector('.score').textContent = score;
        
        }
    
    } else if (score === 0 && guess !== secretNumber ) {
    
        document.querySelector('.message').textContent = `You lost.... better luck next time the number was ${secretNumber}` ;
    
        document.querySelector('.game').textContent = secretNumber;
    
    } else {
    
        document.querySelector('.message').textContent = `Game over.` ;
    
    }
});



document.querySelector('.again').addEventListener('click', function () {
    
    score = 5;
    
    document.querySelector('.game').textContent = '?';
    
    secretNumber = Math.trunc(Math.random()*20)+1;
    
    secretNumber === 10? secretNumber = Math.trunc(Math.random()*20)+1: secretNumber = secretNumber;
    
    document.querySelector('.score').textContent = score;
    
    document.querySelector('.message').textContent = 'Start guessing...';
    
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.guess').textContent = '';
    
    if (secretNumber > 10){
    
        document.querySelector('.hint').textContent = '10 is too low';
    
    } else if (secretNumber < 10){
    
        document.querySelector('.hint').textContent = '10 is too high';
    
    }else {
    
        document.querySelector('.hint').textContent = '';
    
    }

});

document.querySelector('.reset').addEventListener('click', function () {

    score = 5;

    document.querySelector('.game').textContent = '?';

    secretNumber === 10? secretNumber = Math.trunc(Math.random()*20)+1: secretNumber = secretNumber;

    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.score').textContent = score;

    document.querySelector('.message').textContent = 'Start guessing...';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').textContent = '';

    document.querySelector('.highscore') = 0;

    if (secretNumber > 10){

        document.querySelector('.hint').textContent = '10 is too low';

    } else if (secretNumber < 10){

        document.querySelector('.hint').textContent = '10 is too high';

    }else {

        document.querySelector('.hint').textContent = '';

    }

    players = [];

    for (let i = 0; i <= numplayers-1; i++){

        players[i] = prompt('player name:   ');

    };

    [player1,player2,player3,player4,player5,player6,player6,player7,player8,player9,player10] = players;

});