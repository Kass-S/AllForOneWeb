


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

const RestaurantFastFoodBtn = document.getElementById("RestaurantFastFoodBtn");
const RestaurantPizzaBtn = document.getElementById("RestaurantPizzaBtn");
const RestaurantFoodTruckBtn = document.getElementById("RestaurantFoodTruckBtn");

let helloName = 'default';
let addNum1;
let addNum2;
let restaurantChoice = 'default';


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