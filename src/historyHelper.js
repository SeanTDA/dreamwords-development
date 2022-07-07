




export const getHighestStreakWithLives = (history, livesThreshold = 3) => {
    var highestStreak = 0;
    var currentDay = history.daysPlayed[0];
    var previousDay = currentDay - 1;
    var currentRunningStreak = 0;
    // assumes daysPlayed is in consecutive order
    for (var i = 0; i < history.daysPlayed.length; i++) {
        currentDay = history.daysPlayed[i];
        var dayResults = history.results[currentDay];
        if (previousDay !== currentDay-1) {
           // console.log("Lost Streak, skipped a day");
            currentRunningStreak = 0;
            previousDay = currentDay;
            continue;
        }
        if (dayResults.wrongLetters.length < livesThreshold) {
           // console.log("Kept Streak");
            currentRunningStreak += 1;
            if (currentRunningStreak > highestStreak)
                highestStreak = currentRunningStreak;
            previousDay = currentDay;
            continue;
        } else {
            //console.log("Lost Streak");
            currentRunningStreak = 0;
            previousDay = currentDay;
            continue;
        }
    }
    return highestStreak;
}


export const getHighestStreak = (history) => {
    var highestStreak = getHighestStreakWithLives(history, 3);
    console.log("Highest streak: " + highestStreak);
    return highestStreak;
}

export const getHighestSuperStreak = (history) => {
    var highestSuperStreak = getHighestStreakWithLives(history, 1);
    console.log("Highest SUPER streak: " + highestSuperStreak);
    return highestSuperStreak;
}