
export const checkGameLost = (wrongLetters) => {
    return wrongLetters.length >= 3;
}


export const checkGameWon = (correctLetters, goalPhrase) => {

    var wonFlag = true;
    for (var letterInGoalPhraseIndex = 0; letterInGoalPhraseIndex < goalPhrase.length; letterInGoalPhraseIndex++) {
        if (goalPhrase[letterInGoalPhraseIndex] === " ") continue; // skips white space
        if (!correctLetters.includes(goalPhrase[letterInGoalPhraseIndex])) wonFlag = false;
    }




    return wonFlag;
}
