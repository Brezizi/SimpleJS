//Deklarasi niali awal variable score dan permainan
let scoreA = 0;
let scoreB = 0;
let game = false;

function startGame() {
    //Input nama kedua team
    const nameA = document.getElementById('nameA').value;
    const nameB = document.getElementById('nameB').value;

    document.getElementById('displayNameA').innerText = nameA;
    document.getElementById('displayNameB').innerText = nameB;

    scoreA = 0;
    scoreB = 0;
    game = true;
    updateScore();
    document.getElementById('gameStatus').innerText = 'Game Start!';

    if (game === true) {
        document.getElementById('nameA').style.display = 'none';
        document.getElementById('nameB').style.display = 'none';
        document.getElementById('srt-button').style.display = 'none';
    }
}

function addScore(team) {
    if (!game) return;

    if (team === 'teamA') {
        scoreA++;
    } else if ( team === 'teamB') {
        scoreB++;
    }
    updateScore();
    checkScore();
}

function updateScore() {
    document.getElementById('scoreA').innerText = scoreA;
    document.getElementById('scoreB').innerText = scoreB;
}

function checkScore() {
    const scoreDistance = Math.abs(scoreA - scoreB);
    if ( scoreDistance >= 2 && (scoreA >= 25 || scoreB >= 25)) {
        game = false;
        document.getElementById('gameStatus').innerText = 'Game Over!'
    }

    if (game === false) {
        document.getElementById('nameA').style.display = 'block';
        document.getElementById('nameB').style.display = 'block';
        document.getElementById('srt-button').style.display = 'block';
    }
}