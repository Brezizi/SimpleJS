let scoreA = 0;
let scoreB = 0;
let setA = 0;
let setB = 0;
let curSet = 1;
let game = false;
const maxSets = 3;

function startGame() {
    const nameA = document.getElementById('nameA').value;
    const nameB = document.getElementById('nameB').value;

    document.getElementById('displayNameA').innerText = nameA;
    document.getElementById('displayNameB').innerText = nameB;

    scoreA = 0;
    scoreB = 0;
    if (curSet === 1) {
        setA = 0;
        setB = 0;
    }
    game = true;
    updateScore();
    document.getElementById('gameStatus').innerText = `Set ${curSet} Start!`;

    // Hide name inputs and start button
    document.getElementById('nameA').style.display = 'none';
    document.getElementById('nameB').style.display = 'none';
    document.getElementById('srt-button').style.display = 'none';
}

function editScore(team, edit) {
    if (!game) return;

    if (team === 'teamA') {
        if (edit === '+') {
            scoreA = Math.min(scoreA + 1, 35);
        } else if (edit === '-') {
            scoreA = Math.max(scoreA - 1, 0);
        }
    } else if (team === 'teamB') {
        if (edit === '+') {
            scoreB = Math.min(scoreB + 1, 35);
        } else if (edit === '-') {
            scoreB = Math.max(scoreB - 1, 0);
        }
    }
    updateScore();
    check();
}

function updateScore() {
    document.getElementById('scoreA').innerText = scoreA;
    document.getElementById('scoreB').innerText = scoreB;
    document.getElementById('setA').innerText = `Sets Won: ${setA}`;
    document.getElementById('setB').innerText = `Sets Won: ${setB}`;
}

function resetGame() {
    scoreA = 0;
    scoreB = 0;
    game = true;
    updateScore();
    document.getElementById('gameStatus').innerText = `Set ${curSet} Start!`;
}

function resetMatch() {
    scoreA = 0;
    scoreB = 0;
    setA = 0;
    setB = 0;
    curSet = 1;
    game = false;
    updateScore();
    document.getElementById('nameA').style.display = 'block';
    document.getElementById('nameB').style.display = 'block';
    document.getElementById('srt-button').style.display = 'block';
}

function check() {
    const scoreDistance = Math.abs(scoreA - scoreB);

    if (scoreDistance >= 2 && (scoreA >= 25 || scoreB >= 25)) {
        if (scoreA > scoreB) {
            setA++;
        } else {
            setB++;
        }

        if (setA === maxSets || setB === maxSets) {
            game = false;
            document.getElementById('gameStatus').innerText = `Game Over! ${setA > setB ? 'Team A' : 'Team B'} Wins the Match!`;
            resetMatch();
        } else {
            game = false;
            curSet++;
            document.getElementById('gameStatus').innerText = `Set ${curSet} Start!`;
            resetGame();
        }
    }
}