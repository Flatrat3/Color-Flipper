const colorButton = document.getElementById("colorButton");
const colorCode = document.getElementById("colorCode");
const copyIcon = document.getElementById("copyIcon");
console.log(copyIcon);

colorButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    // console.log(randomColor)
    document.body.style.background = randomColor;
    colorCode.textContent = randomColor;
});

copyIcon.addEventListener("click", async () => {
    const colorTextCode = colorCode.textContent;

    if (!colorTextCode) {
        alert("There is no color to copy");
        return;
    }

    try {
        navigator.clipboard.writeText(colorTextCode);
        alert("Code has been copied");
    } catch (error) {
        alert("Copy failed. Please try again");
    }
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let colors = "#";

    for (let i = 0; i < 6; i++) {
        colors += letters[Math.floor(Math.random() * 16)];
    }
    return colors;
}
