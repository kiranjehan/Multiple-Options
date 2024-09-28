let data = [
    {
    Q : "Q : National flower of Pakistan?",
    a :  "Rose",
    b :  "Sunflower",
    c :   "Jasmine",
    d :   "Lilly",
    ans :  "ans3",
},
{
    Q : "Q : HTML stand for?",
    a :  "High text Multi Language",
    b :  "Hyper text Markup Language",
    c :   "High Time Media Language",
    d :   "Hyper transform Multy Limited",
    ans :  "ans2",
},
{
 Q : "Q : Java Script is used For?",
    a :  "Frontened",
    b :  "Animation",
    c :   "Dynamically update Content",
    d :   "Backend",
    ans :  "ans3",
},
{
    Q : "Q : What is the Fullform of JS?",
    a : "JavaScript",
    b : "JavaScience ",
    c : "JavaS",
    d : "Javasecure",
    ans :  "ans1",
},
{
    Q : "Q : Who developed JS?",
    a : "Santa",
    b : "Brenden Eich",
    c : "George",
    d : "Neck",
    ans : "ans2",
},
{
    Q : "Q : When did JS develop?",
    a : "1995",
    b : "1990",
    c : "1999",
    d : "1892",
    ans : "ans1"
}
]

var question = document.getElementById("qns");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");
var option5 = document.getElementById("opt5");
var option6 = document.getElementById("opt6");

var answers = document.querySelectorAll(".options");
var num = 0;
var score = 0;
var myScore = document.querySelector(".myScore");
var nextBtn = document.getElementById("next");

question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;

function checkAns(){
 var ans;
 answers.forEach((curElement)=>{
 if(curElement.checked){ 
    ans = curElement.id;
    console.log(ans);
 }
})
return ans;
    
}
 function disSelect(){
    answers.forEach((curElement)=>{
        curElement.checked=false;
    })
 }
function next(){

    var checkedAns = checkAns();

    if(checkedAns == data[num].ans){
       score++;
    }
    num++;
    disSelect();

if(num < data.length){
question.innerHTML=data[num].Q;
option1.innerHTML=data[num].a;
option2.innerHTML=data[num].b;
option3.innerHTML=data[num].c;
option4.innerHTML=data[num].d;
  } else {
    myScore.innerHTML = `You Scored ${score}/${data.length}<br><button onclick="location.reload()">Play Again</button>`;
    nextBtn.style.display="none";
  }
}
