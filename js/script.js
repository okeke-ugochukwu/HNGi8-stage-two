document.getElementById("hamburger-close").addEventListener("click", () => {
    document.getElementById("sidebar").style.marginLeft = "-100%";
})

document.getElementById("hamburger-open").addEventListener("click", () => {
    document.getElementById("sidebar").style.marginLeft = "0";
})