


export const getKeycapClassName = (_keycap) => {

    if (_keycap === "NONE")
        return "unlockable-64528-keyboardCap";

    if (_keycap === "STRIPE")
        return "unlockable-125467-keyboardCap";
    
    if (_keycap === "DOTS")
        return "unlockable-45218-keyboardCap";
    
    if (_keycap === "EYES")
        return "unlockable-766423-keyboardCap";
    
    if (_keycap === "GRAD")
        return "unlockable-98642-keyboardCap";
    
    if (_keycap === "HEART")
        return "unlockable-444678-keyboardCap";
    
    if (_keycap === "CAT")
        return "unlockable-333875-keyboardCap";

    return "keyboardKey";
}


export const getKeycapUnlockProgress = (_keycap) => {

    if (_keycap === "NONE")
        return 1;
        
    if (_keycap === "STRIPE")
        return 1;

    if (_keycap === "DOTS")
        return 1;

    if (_keycap === "EYES")
        return 1;

    if (_keycap === "GRAD")
        return 1;
    
    if (_keycap === "HEART")
        return 1;
        
    if (_keycap === "CAT")
        return 1;

    return 0.8;
}
 