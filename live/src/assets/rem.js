function rem() {
    const docE = document.documentElement;
    docE.style.fontSize = (docE.clientWidth / 7.5) * 2 + "px"
}

addEventListener("load", rem)
addEventListener("resize", rem)