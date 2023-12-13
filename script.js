//variables
let playername;
let boxs = [];
const submit = document.getElementById('submit');
const endgame =[[0, 1, 2], [0, 3, 6], [6, 7, 8], [2, 5, 8], [3, 4, 5], [1, 4, 7], [0, 4, 8], [2, 4, 6]];
let gameplay = [0, 1, 2, 3, 4, 5 ,6, 7, 8];
//functions
function user_config(playername, submit){
submit.addEventListener('click', function(){
    playername = document.getElementById('inputname').value
    if(document.getElementById('inputname').value == undefined || document.getElementById('inputname').value == "" || document.getElementById('inputname').value == null){
        playername = "player"
    }
    document.getElementById('askname').style.display = 'none';
    document.getElementById('player').innerHTML = playername;
    });
};
function set_boxs_array(boxs){
    for (let x = 0; x < 9; x++){
        boxs[x] = document.querySelector("#box" + String(x));
        boxs[x].innerText = ""
    }
};
function endgame_check(endgame){
    for (let i = 0; i < 8; i++){
        for (let j =0; j < 1; j++){
            if(gameplay[endgame[i][j]] === gameplay[endgame[i][j + 1]] &&  gameplay[endgame[i][j + 1]] === gameplay[endgame[i][j + 2]]){
                document.getElementById('winner').innerText = "The winner is " + gameplay[endgame[i][j]];
                document.getElementById('endgame').style.display = 'flex';
                return "end";
            }
        }
    }
    if (gameplay[0] != 0 && gameplay[1] != 1 && gameplay[2] != 2 && gameplay[3] != 3 && gameplay[4] != 4 && gameplay[5] != 5 && gameplay[6] != 6 && gameplay[7] != 7 && gameplay[8] != 8){
        document.getElementById('winner').innerText = "There is no winner";
        document.getElementById('endgame').style.display = 'flex';
        return "end";
    }
};
function game(boxs, gameplay){
    for (let k =0; k < 9; k++){
        if ( boxs[k] != undefined){
            boxs[k].onclick = function(){
                boxs[k].innerText = 'O';
                gameplay[k] = 'O';
                delete boxs[k];
                if (endgame_check(endgame, boxs) == "end"){
                    return;
                }
                let rand;
                do{
                    rand = Math.floor(Math.random() * 9);
                }while(boxs[rand] == undefined)
                    
                boxs[rand].innerText = 'X';
                gameplay[rand] = 'X';
                delete boxs[rand];
                if (endgame_check(endgame, boxs) == "end"){
                    return;
                }
                    }
                    }
                }
};
//game
user_config(playername, submit);
set_boxs_array(boxs);
game(boxs, gameplay);
document.getElementById("restart").addEventListener('click', function(){
    for (let q = 0; q < 9; q++){
        gameplay[q] = q;
    }
    set_boxs_array(boxs);
    game(boxs, gameplay);
    document.getElementById('endgame').style.display = 'none';
})