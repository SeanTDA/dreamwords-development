
function Life({ state }) {

    if (state === "FULL")
        return ("❤️");
    if (state === "EMPTY")
        return ("🖤");
}

export default Life;