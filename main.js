var gQuests
var gCurrQuestIdx = 0

function initGame() {
    gQuests = createQuests()
    renderQuest(gCurrQuestIdx)
    renderImg()
}

function renderQuest(questIdx) {
    var strHTML = ''
    var currOpts = gQuests[questIdx].opts
    for (var i = 0; i < currOpts.length; i++) {
        var currOpt = currOpts[i]
        var elDiv = document.querySelector('.opts')
        strHTML +=
            `<div class="opt opt${i}" onclick="checkAnswer(${i})">
        ${currOpt}
        </div>\n`
    }
    elDiv.innerHTML = strHTML
}

function createQuests() {
    var firstQ = { id: 'q1', opts: ['Leo Messi', 'Sergio Ramos', 'Cristiano Ronaldo'], correctOptIdx: 2 }
    var secondQ = { id: 'q2', opts: ['Ronaldo Lima', 'Neymar Jr', 'Cafu'], correctOptIdx: 0 }
    var thirdQ = { id: 'q3', opts: ['Van Der Sar', 'Ruud Gullit', 'Van Der Vaart'], correctOptIdx: 1 }
    return [firstQ, secondQ, thirdQ]
}

function checkAnswer(optIdx) {
    var quest = gQuests[gCurrQuestIdx]
    if (optIdx === quest.correctOptIdx) {
        if (gCurrQuestIdx === gQuests.length - 1) return alert('Victorious !')
        else nextQuest()
    }

    // if (gCurrQuestIdx === 0) {
    //     if (optIdx === 2) nextQuest()
    // }
    // if (gCurrQuestIdx === 1) {
    //     if (optIdx === 0) nextQuest()
    // }
    // if (gCurrQuestIdx === 2) {
    //     if (optIdx === 1) alert('Victorious !')
    // }
}

function renderImg() {
    var elImg = document.querySelector('.photo-container')
        elImg.innerHTML = `<img src="Photos/${gCurrQuestIdx}.jpg" alt=""></img>`
}

function nextQuest() {
    gCurrQuestIdx++
    renderQuest(gCurrQuestIdx)
    renderImg()
}