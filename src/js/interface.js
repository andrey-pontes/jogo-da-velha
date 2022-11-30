document.addEventListener("DOMContentLoaded", () => {

    let area = document.querySelectorAll(".area");

    area.forEach((area) => {
        area.addEventListener("click", handClick);
    })

})

function handClick(event){
    
    let area = event.target;

    let position = area.id;

    if (handleMove(position)){
        setTimeout(() => {
            let output = document.querySelector("#output");
            if (playerRound == 0){
                output.innerHTML = "Game Over! <br> O vencedor foi o player 1!";
                alert("Game Over! O vencedor foi o player 1!");
            } else {
                output.innerHTML = "Game Over! <br> O vencedor foi o player 2!";
                alert("Game Over! O vencedor foi o player 2!");
            }            
        }, 10);
    }

    updateArea();

}

function updateArea(){

    let area = document.querySelectorAll(".area");

    area.forEach((area) => {
        let position = area.id;
        let symbols = board[position];

        if (symbols != ""){
            area.innerHTML = `<div class='${symbols}'</div>`
        }
    })

}

