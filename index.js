
let title = document.querySelector('.title')
let turn ='X';
const squaers =[];

function endWinner(num1,num2,num3){

    title.innerHTML=`${squaers[num1]} is The Winner`;
document.getElementById('item'+num1).style.background="#194F82";
document.getElementById('item'+num2).style.background="#194F82";
document.getElementById('item'+num3).style.background="#194F82";

setInterval(()=>title.innerHTML+='.',1000);
setTimeout(()=>location.reload(),3000);
}

function winner(){
for(let i =1; i <10 ; i++){
    squaers[i] =document.getElementById('item' + i).innerHTML;
}
if(squaers[1] == squaers[2] && squaers[2] == squaers[3] && squaers[1] != ''){

    endWinner(1,2,3);
}
else if(squaers[4] == squaers[5] && squaers[5] == squaers[6] && squaers[4] != ''){
    endWinner(4,5,6);


}
else if(squaers[7] == squaers[8] && squaers[8] == squaers[9] && squaers[7] != ''){

    endWinner(7,8,9);

}



else if(squaers[1] == squaers[4] && squaers[4] == squaers[7] && squaers[1] != ''){

    endWinner(1,4,7);

}
else if(squaers[2] == squaers[5] && squaers[5] == squaers[8] && squaers[2] != ''){

    endWinner(2,5,8);

}

else if(squaers[3] == squaers[6] && squaers[6] == squaers[9] && squaers[3] != ''){
    endWinner(3,6,9);


}

else if(squaers[1] == squaers[5] && squaers[5] == squaers[9] && squaers[5] != ''){

    endWinner(1,5,9);

}

else if(squaers[3] == squaers[5] && squaers[5] == squaers[7] && squaers[5] != ''){
    endWinner(3,5,7);


}


}

function game(id){
    let elem = document.getElementById(id);
    if(turn ==='X' && elem.innerHTML == '')
    {
        elem.innerHTML = 'X';
        turn='O';
        title.innerHTML =`Turn of (O)`;
    }
    else if(turn ==='O' && elem.innerHTML == '')
    {
        elem.innerHTML = 'O';
        turn='X';
        title.innerHTML =`Turn of (X)`;
    }
    winner();
}



