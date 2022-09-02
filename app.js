var boop = new Audio("audio/boop.mp3");
var pip = new Audio("audio/wup.mp3");
var wup = new Audio("audio/pip.mp3");
var wii = new Audio("audio/win.mp3");

var con = document.querySelector('.content');
    res = document.querySelector('.res');
    nwg = document.querySelector('.nwg');
    but = document.querySelectorAll(".xo");
    step = false;


    cross = 'x';
    circle = "o";

    crosspoint = [];
    circlepoint = [];

    blue = "#00A5E0"
    purp = "#ff6bf3"


function stepOne(target) {

    target.innerHTML = cross;
    target.classList.add('x');
    crosspoint.push(target.dataset.id);
    boop.play();
    console.log(target.dataset.id);
}

function stepTwo(target)
{
    target.innerHTML = circle;
    circlepoint.push(target.dataset.id);
    target.classList.add('o');
    pip.play();

}

function Init(e) {
    if (!step) stepOne(e.target)
    else stepTwo(e.target)
    step = !step
    win();  
}

function newGame(params) {
    
}

function win() {

    let wincom = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7 ,8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6], 
    ];

    if (wincom.find(function(combination) {
        
        return crosspoint.sort().join() === combination.sort().join();


    })) {wii.play();
    console.log("hyi");
    }

    if (wincom.find(function(combination) {
        
        return circlepoint.sort().join() === combination.sort().join();


    })) {wii.play()};


}

con.addEventListener('click', Init);
console.log