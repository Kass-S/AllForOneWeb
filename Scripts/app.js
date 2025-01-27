
const TitleText = document.getElementById("TitleText");
const PlayBtn = document.getElementById("PlayBtn");
const BackBtnHome = document.getElementById("BackBtnHome");

const SayHelloPathBtn = document.getElementById("SayHelloPathBtn");
const Add2NumsPathBtn = document.getElementById("Add2NumsPathBtn");
const AskingQuestionsPathBtn = document.getElementById("AskingQuestionsPathBtn");
const OddEvenPathBtn = document.getElementById("OddEvenPathBtn");
const MadlibPathBtn = document.getElementById("MadlibPathBtn");
const ReverseItNumPathBtn = document.getElementById("ReverseItNumPathBtn");
const ReverseItStringPathBtn = document.getElementById("ReverseItStringPathBtn");
const GreaterLessPathBtn = document.getElementById("GreaterLessPathBtn");
const Magic8BallPathBtn = document.getElementById("Magic8BallPathBtn");
const RestaurantPickerPathBtn = document.getElementById("RestaurantPickerPathBtn");


PlayBtn.addEventListener('click', () => {
    BackBtnHome.className = "font-inder bg-amber-50 rounded-2xl border-amber-100 border-3 text-3xl m-5 p-2 px-4";
    SayHelloPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    Add2NumsPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    AskingQuestionsPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    OddEvenPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    MadlibPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    ReverseItNumPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    ReverseItStringPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    GreaterLessPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    Magic8BallPathBtn.className = "flex justify-center align-middle my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    RestaurantPickerPathBtn.className = "flex justify-center align-middle col-[2] my-5 bg-amber-50 rounded-2xl border-amber-950 border-3 py-4 mx-6";
    TitleText.className = "hidden";
    PlayBtn.className = "hidden";
})