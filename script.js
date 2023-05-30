let map = document.querySelector(".map")
let xWins = 0; oWins = 0; draw = 0
let cross = document.querySelector(".cross")
cross.innerText = `Победы крестиков: ${xWins}`
let zero = document.querySelector(".zero")
zero.innerText = `Победы Ноликов: ${oWins} `


for(let i = 1; i<10;i++){
    let XOcell = document.createElement("div");
    XOcell.className = "XOcell"
    XOcell.id = i
    XOcell.addEventListener("click",(data)=>{action(data)})
    XOcell.addEventListener("mouseenter",(data)=>{hover(data)})
    XOcell.addEventListener("mouseleave",(data)=>{hoverOut(data)})
    map.append(XOcell)
}

let user = "X"
function action({target}){
    console.log(Boolean(target.innerText))
    if(!target.innerText ){
    target.innerText = user
    user === "X"? xArr.push(Number(target.id)):oArr.push(Number(target.id))
    user = user === "X"? "O":"X"}

    if(checkWin(xArr)){
        alert("Победили Крестики")
        xWins++
        cross.innerText = `Победы Крестиков: ${xWins}`
        reload()
    }
    if(checkWin(oArr)){
        alert("Победили Нолики")
        oWins++
        zero.innerText = `Победы Ноликов: ${oWins} `
        reload()
    }
    if(fullMap()){
        alert("Ничья")
        reload()
        
    }
}

let xArr = []
let oArr = []

let winArr =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]
function checkWin(arr){
    let win;
    for (let i = 0; i < winArr.length; i++) {
        win = true;
        for (let j = 0; j < winArr[i].length; j++) {
            const element = winArr[i][j];
            const test = arr.indexOf(element);
            if(test == -1){win = false;break};
            
        }
        if(win) return win
        
    }
    return win
}

function reload(){
    for (let i = 0; i < map.children.length; i++) {
        const element = map.children[i];
        element.innerText = ''
        xArr = []; oArr = []
        
    }
}

function fullMap(){
    let count = 0
    for (let i = 0; i < map.children.length; i++) {
        const element = map.children[i];
        if(element.innerText) count++
    }
    if(count===9){
        return true
    }
    return false;
}
const cursor = document.querySelector(".new-cursor");
function hover({target}) {
    console.log(target)

    const mouseMove = function (e) { // #2
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
    cursor.innerText = user
};

    document.addEventListener("mousemove", mouseMove); // #3    
}
function hoverOut({target}) {
    console.log(target)
    const mouseMove = function (e) { // #2
        let x = e.clientX;
        let y = e.clientY;
        cursor.style.left = x + "px";
        cursor.style.top = y + "px";
        cursor.innerText = ''
    };
    document.addEventListener("mousemove", mouseMove);
    
}

