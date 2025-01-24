


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

const SayHelloUserField = document.getElementById("SayHelloUserField");
const SayHelloGoBtn = document.getElementById("SayHelloGoBtn");
const SayHelloText = document.getElementById("SayHelloText");

const AddNumbersUserField1 = document.getElementById("AddNumbersUserField1");
const AddNumbersUserField2 = document.getElementById("AddNumbersUserField2");
const AddNumbersGoBtn = document.getElementById("AddNumbersGoBtn");
const AddNumbersText = document.getElementById("AddNumbersText");

const NameQuestionUserField = document.getElementById("NameQuestionUserField");
const TimeQuestionUserField = document.getElementById("TimeQuestionUserField");
const AskingQuestionsGoBtn = document.getElementById("AskingQuestionsGoBtn");
const AskingQuestionsText = document.getElementById("AskingQuestionsText");

const OddEvenUserField = document.getElementById("OddEvenUserField");
const OddEvenGoBtn = document.getElementById("OddEvenGoBtn");
const OddEvenText = document.getElementById("OddEvenText");

const MadLibNounUserField = document.getElementById("MadLibNounUserField");
const MadLibAnimalUserField = document.getElementById("MadLibAnimalUserField");
const MadLibNameUserField = document.getElementById("MadLibNameUserField");
const MadLibDifferentNameUserField = document.getElementById("MadLibDifferentNameUserField");
const MadLibEmotionUserField = document.getElementById("MadLibEmotionUserField");
const MadLibActionUserField = document.getElementById("MadLibActionUserField");
const MadLibJobUserField = document.getElementById("MadLibJobUserField");
const MadLibStructureUserField = document.getElementById("MadLibStructureUserField");
const MadLibGoBtn = document.getElementById("MadLibGoBtn");
const MadLibText = document.getElementById("MadLibText");

const NumberReverseItUserField = document.getElementById("NumberReverseItUserField");
const NumberReverseItGoBtn = document.getElementById("NumberReverseItGoBtn");
const NumberReverseItText = document.getElementById("NumberReverseItText");

const AlphnumericReverseItUserField = document.getElementById("AlphnumericReverseItUserField");
const AlphnumericReverseItGoBtn = document.getElementById("AlphnumericReverseItGoBtn");
const AlphnumericReverseItText = document.getElementById("AlphnumericReverseItText");

const RestaurantFastFoodBtn = document.getElementById("RestaurantFastFoodBtn");
const RestaurantPizzaBtn = document.getElementById("RestaurantPizzaBtn");
const RestaurantFoodTruckBtn = document.getElementById("RestaurantFoodTruckBtn");

let helloName;
let addNum1;
let addNum2;
let nameQuestion;
let timeQuestion;
let oddEvenInput;
let madLibNoun;
let madLibAnimal;
let madLibName;
let madLibDifferentName;
let madLibEmotion;
let madLibAction;
let madLibJob;
let madLibStructure;
let reverseItNum;
let reverseItString;
let restaurantChoice;


// SayHelloGoBtn.addEventListener('click', async () => {
//     helloName = SayHelloUserField.value;
//     SayHello(helloName);
//     SayHelloText.innerText = await SayHello(helloName);
// })

// const SayHello = async (sayHelloName) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/SayHello/SayHello/${sayHelloName}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// AddNumbersGoBtn.addEventListener('click', async () => {
//     addNum1 = AddNumbersUserField1.value;
//     addNum2 = AddNumbersUserField2.value;
//     Add2Numbers(addNum1, addNum2)
//     AddNumbersText.innerText = await Add2Numbers(addNum1, addNum2);
// })

// const Add2Numbers = async (num1, num2) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Add2Num/Add/${num1}/${num2}`)
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// AskingQuestionsGoBtn.addEventListener('click', async () => {
//     nameQuestion = NameQuestionUserField.value;
//     timeQuestion = TimeQuestionUserField.value;
//     AskingQuestions(nameQuestion, timeQuestion);
//     AskingQuestionsText.innerText = await AskingQuestions(nameQuestion, timeQuestion);
// })

// const AskingQuestions = async (question1, question2) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/AskingQuestions/Asking/${question1}/${question2}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// OddEvenGoBtn.addEventListener('click', async () => {
//     oddEvenInput = OddEvenUserField.value;
//     OddOrEven(oddEvenInput);
//     OddEvenText.innerText = await OddOrEven(oddEvenInput);
// })

// const OddOrEven = async (oddEvenInput) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/OddEven/OddEvenAnswer/${oddEvenInput}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// MadLibGoBtn.addEventListener('click', async () => {
//     madLibNoun = MadLibNounUserField.value;
//     madLibAnimal = MadLibAnimalUserField.value;
//     madLibName = MadLibNameUserField.value;
//     madLibDifferentName = MadLibDifferentNameUserField.value;
//     madLibEmotion = MadLibEmotionUserField.value;
//     madLibAction = MadLibActionUserField.value;
//     madLibJob = MadLibJobUserField.value;
//     madLibStructure = MadLibStructureUserField.value;
//     MadLib(madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure);
//     MadLibText.innerText = await MadLib(madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure);
// })

// const MadLib = async (madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/MadLib/MadLibStory/${madLibNoun}/${madLibAnimal}/${madLibName}/${madLibDifferentName}/${madLibEmotion}/${madLibAction}/${madLibJob}/${madLibStructure}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// NumberReverseItGoBtn.addEventListener('click', async () => {
//     reverseItNum = NumberReverseItUserField.value;
//     ReverseItNumber(reverseItNum);
//     NumberReverseItText.innerText = await ReverseItNumber(reverseItNum);
// })

// const ReverseItNumber = async (reverseItNum) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/NumberReverse/NumberReverseIt/${reverseItNum}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// AlphnumericReverseItGoBtn.addEventListener('click', async () => {
//     reverseItString = AlphnumericReverseItUserField.value;
//     ReverseItAlphnumeric(reverseItString);
//     AlphnumericReverseItText.innerText = await ReverseItAlphnumeric(reverseItString);
// })

// const ReverseItAlphnumeric = async (reverseItString) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/StringReverse/ReverseIt/${reverseItString}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }






//change these to async when you get the chance to alter the inner text
// RestaurantFastFoodBtn.addEventListener('click', () => {
//    RestaurantPicker('fast food');
// })
// RestaurantPizzaBtn.addEventListener('click', () => {
//     RestaurantPicker('pizza');
// })
// RestaurantFoodTruckBtn.addEventListener('click', () => {
//     RestaurantPicker('food truck');
// })

// const RestaurantPicker = async (restaurantChoice) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/RestaurantPicker/Pick/${restaurantChoice}`);
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }