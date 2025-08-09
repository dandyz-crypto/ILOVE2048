
var board;
var score = 0;
var rows = 4;
var collums = 4;

window.onload = function(){
    SetGame();
}
function SetGame(){
    board = [
        [0, 0, 0 ,0],
        [0, 0, 0 ,0],
        [0, 0, 0 ,0],
        [0, 0, 0 ,0]
    ]
    for (let r = 0; r < rows; r++){
        for (let c = 0; c < collums; c++){

            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updatetile(tile, num);
        }
    }
}
function updatetile (tile, num){
    tile.innerText = "";
    tile.classList.value = "";
}