let p1 = document.getElementById("count");
let b1 = document.getElementById("button01");
let b2 = document.getElementById("button02");
let b3 = document.getElementById("button03");


b1.addEventListener("click", manu01);
function manu01(){
    let previous = p1.textContent;
    let new01 = parseInt(previous) + 1;
    p1.innerHTML = new01;

    if(new01 > 0){
        p1.style.color = "green";
    }
    else if(new01 < 0){
        p1.style.color = "red"
    }
    else {
       p1.style.color = "black";
    }
    
}

b2.addEventListener("click", manu02);
function manu02(){
    let previous = p1.textContent;
    let new01 = parseInt(previous)*0;
    p1.innerHTML=new01;
    if(new01 > 0){
        p1.style.color = "green";
    }
    else if(new01 < 0){
        p1.style.color = "red"
    }
    else {
       p1.style.color = "black";
    }
    
}

b3.addEventListener("click", manu03);
function manu03(){
    let previous = p1.textContent;
    let new01 = parseInt(previous)-1;
    p1.innerHTML=new01;
    if(new01 > 0){
        p1.style.color = "green";
    }
    else if(new01 < 0){
        p1.style.color = "red"
    }
    else {
       p1.style.color = "black";
    }
    
}