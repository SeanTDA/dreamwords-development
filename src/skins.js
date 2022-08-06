

import {getNumDaysPlayed} from "./historyHelper.js";

export const getKeycapClassName = (_keycap) => {
    var className = "keyboardKey";

    if (_keycap === "NONE") className = "unlockable-64528-keyboardCap";
    else if (_keycap === "STRIPE") className = "unlockable-125467-keyboardCap";
    else if (_keycap === "DOTS") className = "unlockable-45218-keyboardCap";
    else if (_keycap === "EYES") className = "unlockable-766423-keyboardCap";
    else if (_keycap === "GRAD") className = "unlockable-98642-keyboardCap";
    else if (_keycap === "HEART") className = "unlockable-444678-keyboardCap";
    else if (_keycap === "CAT") className = "unlockable-333875-keyboardCap";
    else if (_keycap === "BOLT") className = "unlockable-2244221-keyboardCap";

    return className;
}


export const getKeycapUnlockProgress = (_keycap, _history) => {
    var unlockProgress = 0.8;

    console.log(JSON.stringify(_history));

    if (_keycap === "NONE") unlockProgress = 1;
    else if (_keycap === "GRAD")  unlockProgress = 1;
    else if (_keycap === "STRIPE") unlockProgress = getNumDaysPlayed(_history) / 3;
    else if (_keycap === "DOTS") unlockProgress = getNumDaysPlayed(_history) / 10;
    else if (_keycap === "CAT") unlockProgress = getNumDaysPlayed(_history) / 25;
    else if (_keycap === "BOLT") unlockProgress = getNumDaysPlayed(_history) / 40;
    else if (_keycap === "HEART") unlockProgress = getNumDaysPlayed(_history) / 52;
    else if (_keycap === "EYES") unlockProgress = getNumDaysPlayed(_history) / 75;
    if (unlockProgress < 0.01) unlockProgress = 0.01; // avoids 0% unlock
    return unlockProgress;
}
 