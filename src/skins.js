

import {getNumDaysWon} from "./historyHelper.js";

export const getKeycapClassName = (_keycap) => {
    var className = "keyboardKey";

    if (_keycap === "NONE") className = "unlockable-64528-keyboardCap";
    else if (_keycap === "GRAD") className = "unlockable-98642-keyboardCap";
    else if (_keycap === "STRIPE") className = "unlockable-125467-keyboardCap";
    else if (_keycap === "DOTS") className = "unlockable-45218-keyboardCap";
    else if (_keycap === "CAT") className = "unlockable-333875-keyboardCap";
    else if (_keycap === "DIAMONDS") className =  "unlockable-777765-keyboardCap";
    else if (_keycap === "GRID") className =  "unlockable-689125-keyboardCap";
    else if (_keycap === "BOLT") className = "unlockable-2244221-keyboardCap";
    else if (_keycap === "EYES") className = "unlockable-766423-keyboardCap";
    else if (_keycap === "LITERAL") className =  "unlockable-223388-keyboardCap";
    else if (_keycap === "HEART") className = "unlockable-444678-keyboardCap";

    return className;
}


export const getKeycapUnlockProgress = (_keycap, _history) => {
    var unlockProgress = 0.8;

    if (_keycap === "NONE") unlockProgress = 1;
    else if (_keycap === "GRAD")  unlockProgress = 1;
    else if (_keycap === "STRIPE") unlockProgress = 1;
    else if (_keycap === "DOTS") unlockProgress = getNumDaysWon(_history) / 3;
    else if (_keycap === "CAT") unlockProgress = getNumDaysWon(_history) / 10;
    else if (_keycap === "DIAMONDS") unlockProgress = getNumDaysWon(_history) / 15;
    else if (_keycap === "GRID") unlockProgress = getNumDaysWon(_history) / 20;
    else if (_keycap === "BOLT") unlockProgress = getNumDaysWon(_history) / 25;
    else if (_keycap === "EYES") unlockProgress = getNumDaysWon(_history) / 40;
    else if (_keycap === "LITERAL") unlockProgress = getNumDaysWon(_history) / 50;
    else if (_keycap === "HEART") unlockProgress = getNumDaysWon(_history) / 52;

    return unlockProgress;
}
 