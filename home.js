//challange 1
function ageInDays(){
 var birthYear = prompt('What year do you born... Good friend?');
 var ageInDayss = (2020 - birthYear)*365;
 var h1 = document.createElement('h1');
 var textAnswer = document.createTextNode('You are'+ageInDayss+'days')
 h1.setAttribute('id','ageInDays');
 h1.appendChild(textAnswer);
 document.getElementById('flex-box-result').appendChild(h1);
}


function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image =document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://picsum.photos/200/300";
    div.appendChild(image);

}



//rps 
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;
    console.log('computerChoice: ',botChoice);
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message =finalMessage(results);
    console.log(message);
    //rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissor'][number]
}


function decideWinner(yourChoice, computerChoice){
    var rpsDatabase={
        'rock':{'scissors':1, 'rock': 0.5, 'paper':0},
        'paper':{'rock':1,'paper':0.5, 'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}
    }
    var yourScore=rpsDatabase[yourChoice][computerChoice];
    var computerChoice=rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if (yourScore===0) {
        return {'message':'You lost', 'color':'red'};
    }else if (yourScore===0.5){
        return {'message':'You tied', 'color':'yellow'};
    }else{
        return{'message':'You won', 'color':'green'};
    }
}


var all_buttons = document.getElementByTagName('button');

var copyAllButtons=[];
for (let i=0; i<all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[i]);
}

console.log(copyAllButtons);
function buttonColorChange(buttonThingy){
    if (buttonThingy.value==='red'){
    buttonsRed();
    }else if (buttonThingy.value==='green'){
    buttonsGreen();
    }else if (buttonThingy.value==='reset'){
    buttonsColorReset();
    }else if (buttonThingy.value==='random'){
    randomColors();
    }
}




function buttonsRed() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}


function buttonsGreen() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}


function buttonsRed() {
    for (let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}



 