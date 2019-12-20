

//Sprites
let skellySprite, skellySpriteRev;

//Data Structures
let skellys;

//Global Properties
let lineLength = 5;
let skellyStartingX = 100;
let skellyStartingY = 100;
let currentAlgorithm;

let doneSorting = false
let textStartingX = skellyStartingX
let textStartingY = skellyStartingY
let textOpacity = 1

function preload() {
    skellySprite = loadImage('./skelly.gif');
    skellySpriteRev = loadImage('./skelly-rev.gif');
}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    setupListeners();

    createSkellys(lineLength);

    let sortArr = [10, -1, 2, 5, 0, 6, 4, -5]
}
function draw() {
    background(100);
    scale(skellys[0].scaleFactor)
    for(let i = 0; i < skellys.length; i++) {
        skellys[i].display();
    }
    if(doneSorting) {
        textSize(32)
        fill(`rgba(255,255,255,${textOpacity})`)
        text('Done sorting!', textStartingX, textStartingY)
        textStartingY -= 1
        textOpacity -= 0.01
        if(textOpacity < 0) {
            doneSorting = false
            textStartingY = skellyStartingY
            textOpacity = 1
        }
    }
}
function createSkellys(length) {
    skellys = [];
    skellys.push(new Skelly(skellyStartingX * 1, skellyStartingY, 10));
    skellys.push(new Skelly(skellyStartingX * 2, skellyStartingY, -1));
    skellys.push(new Skelly(skellyStartingX * 3, skellyStartingY, 2));
    skellys.push(new Skelly(skellyStartingX * 4, skellyStartingY, 5));
    skellys.push(new Skelly(skellyStartingX * 5, skellyStartingY, 0));
    skellys.push(new Skelly(skellyStartingX * 6, skellyStartingY, 6));
    skellys.push(new Skelly(skellyStartingX * 7, skellyStartingY, 4));
    skellys.push(new Skelly(skellyStartingX * 8, skellyStartingY, -5));
}

///////////////
function setupListeners() {
    document.getElementById("line-submit").addEventListener('click', () => {
        lineLength = document.getElementById('line-length').value;
        createSkellys(lineLength);
    });
    document.getElementById("sort-merge").addEventListener('click', () => {
        currentAlgorithm = new Algorithm(skellys, SORTING_METHODS.MERGE);
        doneSorting = currentAlgorithm.sort();
    });
    document.getElementById("sort-quick").addEventListener('click', () => {
        currentAlgorithm = new Algorithm(skellys, SORTING_METHODS.QUICK);
        currentAlgorithm.sort();
    })
    document.getElementById("sort-bubble").addEventListener('click', () => {
        currentAlgorithm = new Algorithm(skellys, SORTING_METHODS.BUBBLE);
        currentAlgorithm.sort();
    })
    document.getElementById("sort-heap").addEventListener('click', () => {
        currentAlgorithm = new Algorithm(skellys, SORTING_METHODS.HEAP);
        currentAlgorithm.sort();
    })
}