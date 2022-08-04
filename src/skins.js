


export const getKeycapClassName = (_keycap) => {

    if (_keycap === "STRIPE") {
        return "unlockable-stripe-keyboardCap";
    }

    return "keyboardKey";
}


export const getKeycapUnlockProgress = (_keycap) => {

    if (_keycap === "NONE")
        return 1;
        
    if (_keycap === "STRIPE")
        return 1;

    return 0.8;
}
 