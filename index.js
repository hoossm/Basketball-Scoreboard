let scoreH = 0
let scoreG = 0

let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function addOneBtnH() {
    scoreH += 1
    homeScoreEl.textContent = scoreH
}

function addTwoBtnH() {
    scoreH += 2
    homeScoreEl.textContent = scoreH
}

function addThreeBtnH() {
    scoreH += 3
    homeScoreEl.textContent = scoreH
}

function resetBtnH() {
    scoreH = 0
    homeScoreEl.textContent = scoreH
}

function addOneBtnG() {
    scoreG += 1
    guestScoreEl.textContent = scoreG
}

function addTwoBtnG() {
    scoreG += 2
    guestScoreEl.textContent = scoreG
}

function addThreeBtnG() {
    scoreG += 3
    guestScoreEl.textContent = scoreG
}

function resetBtnG() {
    scoreG = 0
    guestScoreEl.textContent = scoreG
}