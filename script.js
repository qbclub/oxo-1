var currentPlayer = "X";
var won = false;
let count = 0;
X = 0
O = 0

function place(box) {
    if (box.innerText != "" || won) return;

    count++;

    box.innerText = currentPlayer;
    currentPlayer == "X" ? currentPlayer = "0" : currentPlayer = "X";
    checkGameBoard()
}

function checkGameBoard() {
    for (let i = 0; i < 3; i++) {
        checkWinner(
            document.getElementById('0_' + i).innerText,
            document.getElementById('1_' + i).innerText,
            document.getElementById('2_' + i).innerText)
        checkWinner(
            document.getElementById(i + '_0').innerText,
            document.getElementById(i + '_1').innerText,
            document.getElementById(i + '_2').innerText)
    }

    checkWinner(
        document.getElementById('0_0').innerText,
        document.getElementById('1_1').innerText,
        document.getElementById('2_2').innerText)

    checkWinner(
        document.getElementById('2_0').innerText,
        document.getElementById('1_1').innerText,
        document.getElementById('0_2').innerText)

    if (count == 9 && !won) {
        alert('Ничья')
    }
}

function checkWinner(first, second, third) {
    if (first != "" && first == second && first == third) {
        alert('Winner')
        won = true
        if (first == 'X') {
            X += 1
        } else {
            O += 1
        }
        document.getElementById('you').innerText = O
        document.getElementById('me').innerText = X
    }
}

function newGame() {
    count = 0
    won = false
    for (let i = 0; i < 3; i++) {
        document.getElementById('0_' + i).innerText = ''
        document.getElementById('1_' + i).innerText = ''
        document.getElementById('2_' + i).innerText = ''
    }
}
// for (let i = 0; i < document.getElementById('you').innerText.length; i++) {
//     console.log(i, ' - ', document.getElementById('you').innerText[i])
// }
// document.getElementById('you').innerText.replace()
