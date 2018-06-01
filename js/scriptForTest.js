var xhr = new XMLHttpRequest();
var objects = [];
var cnt = 0;

var questions=[
{
    text: "Эстетический идеал выступает как:",
    answers: ["тенденция  развития искусства",
          "тенденция общественного развития",
          "тенденция правящих групп"],
    correctAnswer: 0 // нумерация ответов с нуля!
},
{
    text: "Эстетические чувства:",
    answers: ["даются человеку от  рождения",
          "формируются в первые 3-4 года жизни",
          "наличествуют не  у всех людей, а развиваются индивидуально"],
    correctAnswer: 1
},
{
    text: "Символ есть:",
    answers: ["образ, видоизмененный переживанием",
          "отражение личных представлений художника",
          "образ - точная копия окружающей действительности"],
    correctAnswer: 0
}
];

var question_new = [];
var yourAns = new Array;
var score = 0;
var curent = 0;


function loadData(){
for(var i = 1 ; i  < 45; i++ )
{
    var url = "http://nikbali.ru/mywebproject/queryquestion?id="+ i +"";
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status == 200)
    { 
      objects[cnt] = JSON.parse(xhr.responseText);
      cnt++;
    }
}
alert(cnt ); 
}
function Engine(question, answer) {yourAns[question-1]=answer;}
function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
    var num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    var true_ans = "";
    //поиск правильного ответа в вопросе
    for(var j=0; j<objects[i].length;j++)
    {
        if(objects[i].answers[j].isRight == true) true_ans = objects[i].answers[j];
    }
    
    if(true_ans!="" || yourAns[i].isRight!=true)
    {
        answerText=answerText+"\n    Правильный ответ: " +
        true_ans + "\n";
    }
    else{
    answerText=answerText+": Верно! \n";
    ++score;
    }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";

   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");
}
function clearForm(name) {
    
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
}
}

function nextQuestion(){
    if(curent == objects.length)
    {
        Score();
    }
    else
    {
       var sp1 = document.createElement("div"); //тут все дело храним
       sp1.setAttribute("id", "process");
       
            
       var question = objects[curent];
       sp1.innerHTML = '<li value="' + (curent+1) +'"><span class="quest">' + question.textOfQuestion + '</span><br/>';
       for(var i in question.answers)
       {
            sp1.innerHTML +='<input type=radio name="q' + curent + '" value="' + i +
            '" onClick="Engine(' + curent + ', this.value)">' + question.answers[i].text + '<br/>';
       }               
       var sp2 = document.getElementById("process");
       while (sp2.firstChild) 
       {
            sp2.removeChild(sp2.firstChild);
       }
       sp2.appendChild(sp1);
       curent++;
    }
}




