const NameQuestionUserField = document.getElementById("NameQuestionUserField");
const TimeQuestionUserField = document.getElementById("TimeQuestionUserField");
const AskingQuestionsGoBtn = document.getElementById("AskingQuestionsGoBtn");
const AskingQuestionsText = document.getElementById("AskingQuestionsText");
const AskingQuestionsAgainBtn = document.getElementById("AskingQuestionsAgainBtn");

let nameQuestion;
let timeQuestion;

AskingQuestionsGoBtn.addEventListener('click', async () => {
    nameQuestion = NameQuestionUserField.value;
    timeQuestion = TimeQuestionUserField.value;
    AskingQuestionsText.innerText = await AskingQuestions(nameQuestion, timeQuestion);
    AskingQuestionsText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[2]";
    AskingQuestionsAgainBtn.className = "text-2xl bg-white border-3 col-[3] row-[3] m-3 rounded-2xl flex justify-center items-center";
    NameQuestionUserField.className = "hidden";
    TimeQuestionUserField.className = "hidden";
    AskingQuestionsGoBtn.className = "hidden";
})

const AskingQuestions = async (question1, question2) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/AskingQuestions/Asking/${question1}/${question2}`);
    const data = await promise.text();
    console.log(data);
    return data;
}