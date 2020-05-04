
var correct = 0;
var c = 0;
var k = 0;
var $name = "";
function getName() {
    name = document.getElementById("user").value;
    document.getElementById("details").innerHTML = ("Tu es prêt, " + name + "?");
}
var randArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,];
randArray.sort(() => Math.random() * randArray.length);
var word = [];
var hint = [];
var answer = [];
var option1 = [];
var option2 = [];
var option3 = [];
var option4 = [];
var question = [];
var xrequest = new XMLHttpRequest; 
xrequest.open("GET", "questions.xml", true)
xrequest.onreadystatechange = function() {
    if(xrequest.readyState === 4 && xrequest.status === 200){
        var xmlDoc = this.responseXML;
    for (var x = 0; x<20 ; x++)
    { question.push(xmlDoc.getElementsByTagName("question")[x]);
        }
    for (var i = 0; i<20; i++) {
        word.push(question[i].getElementsByTagName("word")[0].childNodes[0].nodeValue);
        answer.push(question[i].getElementsByTagName("answer")[0].childNodes[0].nodeValue);
        hint.push(question[i].getElementsByTagName("hint")[0].childNodes[0].nodeValue);
        option1.push(question[i].getElementsByTagName("option1")[0].childNodes[0].nodeValue);
        option2.push(question[i].getElementsByTagName("option2")[0].childNodes[0].nodeValue);
        option3.push(question[i].getElementsByTagName("option3")[0].childNodes[0].nodeValue);
        option4.push(question[i].getElementsByTagName("option4")[0].childNodes[0].nodeValue);
        }
        }
    };
xrequest.send(); 
var w = document.getElementById("quiz");
      w.style.display = "none";
var y = document.getElementById("restart");
      y.style.display = "none";
function startButton() {
  var x = document.getElementById("ready");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  } 
    var g = document.getElementById("quiz");
  if (g.style.display === "none") {
    g.style.display = "block";
  } else {
    g.style.display = "none";
  }
}

function checkAnswer() {
    if (document.activeElement.innerHTML === answer[x]){
        alert("Votre réponse est correcte!!");
        correct++;
    }
    
    else{
        alert("Réponse fausse!!, la bonne réponse est  : " + answer[x]);
    }
    if (c === 15)
        {
            printResults();
        } 
    else{
            printQuestion();
        }
}
function printQuestion() { 
    x = randArray[k]; 
        document.getElementById("word").innerHTML = word[x];
        document.getElementById("hint").innerHTML = hint[x];
        document.getElementById("option1").innerHTML = option1[x];
        document.getElementById("option2").innerHTML = option2[x];
        document.getElementById("option3").innerHTML = option3[x];
        document.getElementById("option4").innerHTML = option4[x];  
    k++;
    c++;
}
function printResults(total) {
    document.getElementById('head').innerHTML = "RESULTAT!!"
    if (correct ===15) {
     document.getElementById("quiz").innerHTML = ("Félicitation "+ name +"!!! Tu as obtenue 15/15");
    }
    else if(correct === 14 ) {
     document.getElementById("quiz").innerHTML = (name+", C'était bien!! Votre score est: 14/15");
        }
    else if(correct === 13 ) {
     document.getElementById("quiz").innerHTML = (name+", C'était bien!! Votre score est: 13/15");
        }
    else if(correct === 12 ) {
     document.getElementById("quiz").innerHTML = (name+", C'était bien!! Votre score est: 12/15");
        }
    else if(correct === 11 ) {
     document.getElementById("quiz").innerHTML = (name+", C'était bien!! Votre score est: 11/15");
        }
    else if(correct === 10 ) {
     document.getElementById("quiz").innerHTML = (name+",Pas mal!! Votre score est: 10/15");
        }
    else if(correct === 9 ) {
     document.getElementById("quiz").innerHTML = (name+", Pas mal!! Votre score est:  9/15");
        }
    else if(correct === 8 ) {
     document.getElementById("quiz").innerHTML = (name+"!! Votre score est: score est: 8/15");
        }
    else if(correct === 7 ) {
     document.getElementById("quiz").innerHTML = (name+", PAS SI BIEN!! Votre score est:7/15");
        }
    else if(correct === 6 ) {
     document.getElementById("quiz").innerHTML = (name+", PAS SI BIEN!! Votre score est:6/15");
        }
    else if(correct === 5 ) {
     document.getElementById("quiz").innerHTML = (name+",PAS SI BIEN!! Votre score est: est:5/15");
        }
    else if(correct === 4 ) {
     document.getElementById("quiz").innerHTML = (name+", PAS SI BIEN!! Votre score est:4/15");
        }
    else if(correct === 3) {
     document.getElementById("quiz").innerHTML = ("!!! "+ name +"... Votre score est: 3/15");
        }
    else if(correct === 2) {
     document.getElementById("quiz").innerHTML = ( name +" Votre score est: 2/15");
        }
    else {
     document.getElementById("quiz").innerHTML = ( name +",Tu as eu "+ correct +"/15");
        }    
     var y = document.getElementById("restart");
    if (y.style.display === "block"){
      y.style.display = "none";  
    } else {
        y.style.display = "block";
    }   
}










