let arr = ["rock", "paper", "scissor"];
let rock = document.getElementsByClassName("rock")[0];  // Get the first element
let paper = document.getElementsByClassName("paper")[0];
let scissor = document.getElementsByClassName("scissors")[0];
let user = "";
let pscore = 0;
let cscore = 0;
let index;
let computer;
let ps = document.getElementById("ps");
let cs = document.getElementById("cs");
let g = document.getElementById("game");
let result=document.getElementById("result");

rock.addEventListener("click", () => {
    index = Math.floor(Math.random() * 3);
    computer = arr[index];
    user = rock.alt;
    console.log(rock.alt);
    console.log(computer);
    if (computer == "rock") {
        pscore = pscore;
    }
    else if (computer == "paper") {
        cscore++;
    }
    else if (computer == "scissor") {
        pscore++;
    }
    console.log(pscore);
    console.log(cscore);
    ps.innerHTML = pscore;
    cs.innerHTML = cscore;
    if (pscore == cscore) {
        g.innerHTML = "Game is Draw";
        result.style.backgroundColor="blue";
    }
    else if (pscore > cscore) {
        g.innerHTML = "You won the game";
        result.style.backgroundColor="red";
    }
    else {
        g.innerHTML = "Computer won the game";
        result.style.backgroundColor="green";
    }
});

paper.addEventListener("click", () => {
    index = Math.floor(Math.random() * 3);
    computer = arr[index];
    user = paper.alt;
    console.log(paper.alt);
    console.log(computer);
    if (computer == "rock") {
        pscore++;
    }
    else if (computer == "paper") {
        pscore = pscore;
    }
    else if (computer == "scissor") {
        cscore++;
    }

    console.log(pscore);
    console.log(cscore);
    ps.innerHTML = pscore;
    cs.innerHTML = cscore;

    if (pscore == cscore) {
        g.innerHTML = "Game is Draw";
        result.style.backgroundColor="blue";
    }
    else if (pscore > cscore) {
        g.innerHTML = "You won the game";
        result.style.backgroundColor="red";
    }
    else {
        g.innerHTML = "Computer won the game";
        result.style.backgroundColor="green";
    }
});

scissor.addEventListener("click", () => {
    index = Math.floor(Math.random() * 3);
    computer = arr[index];
    user = scissor.alt;
    console.log(scissor.alt);
    console.log(computer);
    if (computer == "rock") {
        cscore++;
    }
    else if (computer == "paper") {
        pscore++;
    }
    else if (computer == "scissor") {
        pscore = pscore;
    }

    console.log(pscore);
    console.log(cscore);
    ps.innerHTML = pscore;
    cs.innerHTML = cscore;

    if (pscore == cscore) {
        g.innerHTML = "Game is Draw";
        result.style.backgroundColor="blue";
    }
    else if (pscore > cscore) {
        g.innerHTML = "You won the game";
        result.style.backgroundColor="red";
    }
    else {
        g.innerHTML = "Computer won the game";
        result.style.backgroundColor="green";
    }
});

