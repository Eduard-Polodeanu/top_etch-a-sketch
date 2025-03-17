
const INITIAL_SIZE = 16;

const container = document.querySelector('#container');

function createCards(size){
    for (let i = 0; i < size**2; i++) {
        let div = document.createElement('div');
        div.classList.add('card');
        container.appendChild(div);
    }
    const cards = document.querySelectorAll('.card');
    setDimensions(cards, size);
    console.log(`Created ${size ** 2} cards.`);
}

function setDimensions(cards, size){
    const containerWidth = containerHeight = container.offsetWidth;
    const cardWidth = cardHeight = containerWidth / size;
    console.log("Container size: " + containerWidth + ' x ' + containerHeight);
    console.log("Cards size: " + cardWidth + ' x ' + cardHeight);
    cards.forEach((card) => {
        card.setAttribute("style", "width:" + cardWidth + "px; height:" + cardHeight + "px;");
    });
}

createCards(INITIAL_SIZE);

function checkHoverEvent() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        card.addEventListener('mouseover', () => {
            card.style.backgroundColor = getRandomColor();
        });
    });
}
checkHoverEvent();

const newGridBtn = document.querySelector('#newGridBtn');
newGridBtn.addEventListener('click', () => {
    const boardWidth = container.offsetWidth;
    const boardHeight = container.offsetHeight;

    let newBoardSize = checkPromptText();

    removeChildren(container);

    createCards(newBoardSize);
    checkHoverEvent();
});

function removeChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild);
    }
}

function checkPromptText() {
    const promptValue = prompt ("Enter the new board size: (max 100)");
    const value = parseInt(promptValue);
    if (isNaN(value))
        alert("Input value not valid.");
    else if (value > 100) {
        alert("Input value too large. Value was set to 100.");
        return 100;
    }
    else return value;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}