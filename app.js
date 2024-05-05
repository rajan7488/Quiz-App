const quizData=[
    {
        question:"What does HTML stand for?",
        options:[
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hypertext Machine Language",
            "HyperLink Markup Language",
        ],
        correct:0,
    },
    {
        question:"Which CSS property is used to control the spacing between elements?",
        options:["margin","padding","spacing","border-spacing"],
        correct:1,
    },
    {
        question:"Which JavaScript function to use select HTML element by its id?",
        options:["getElementbyClassName","getElememntbyIDName","document.query","select.query"],
        correct:1,
    },
    {
        question:"Which HTML tag is used to create a ordered list?",
        options:["ul","li","ol","div"],
        correct:2,
    },
    {
        question:"How many type of the CSS?",
        options:["1","2","3","4"],
        correct:2,
    },
];
// step 2 javascript initialization
const quiz=document.querySelector("#quiz");
const answerElm = document.querySelectorAll(".answer");
const [questionElm,option_1,option_2,option_3,option_4]=document.querySelectorAll("#question,#option_1,#option_2,#option_3,#option_4");
const submitBtn=document.getElementById("submit");

let currentQuiz=0;
let score=0;

// step 3 load quiz function

const loadQuiz=()=>{
    const{question,options}=quizData[currentQuiz];
    questionElm.innerText=`${currentQuiz+1}:${question}`;
    options.forEach((curOption,index)=>(window[`option_${index+1}`].innerText=curOption));
};

loadQuiz();

const getselectedOption=()=>{
   /* let ans_Index;
    answerElm.forEach((curOption,index)=>{
        if(curOption.checked){
            ans_Index=index;
        }
    });
    return ans_Index;*/
    let answerElement=Array.from(answerElm);
    return answerElement.findIndex((curElem)=>curElem.checked);
};

const deselected=()=>{
    answerElm.forEach((curElem)=>curElem.checked=false);
};

submitBtn.addEventListener("click",()=>{
    const selectedoptionIndex=getselectedOption();
    console.log(selectedoptionIndex);

    if(currentQuiz<quizData.length){
        
        if(selectedoptionIndex===quizData[currentQuiz].correct){
            score=score+1;
        }
        currentQuiz++;

    if(currentQuiz<quizData.length){
        deselected();
        loadQuiz();
    }
    else{
        quiz.innerHTML=`
        <div class="result">
        <h2> Your Score: ${score}/${quizData.length} Correct Answer</h2>
        <p>Congratulations on completing the quiz! </p>
        <button class="reload-option" onclick="location.reload()">PLay Again </button>
        </div>`;
    }
}
});