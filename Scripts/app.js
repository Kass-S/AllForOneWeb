
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



const GreaterLessUserField1 = document.getElementById("GreaterLessUserField1");
const GreaterLessUserField2 = document.getElementById("GreaterLessUserField2");
const GreaterLessGoBtn = document.getElementById("GreaterLessGoBtn");
const GreaterLessText = document.getElementById("GreaterLessText");

const Magic8UserField = document.getElementById("Magic8UserField");
const Magic8GoBtn = document.getElementById("Magic8GoBtn");
const Magic8Text = document.getElementById("Magic8Text");

const RestaurantFastFoodBtn = document.getElementById("RestaurantFastFoodBtn");
const RestaurantPizzaBtn = document.getElementById("RestaurantPizzaBtn");
const RestaurantFoodTruckBtn = document.getElementById("RestaurantFoodTruckBtn");


let greaterLessNum1;
let greaterLessNum2;
let magic8Input;
let restaurantChoice;


// PlayBtn.addEventListener('click', () => {
    
// })



// GreaterLessGoBtn.addEventListener('click', async () => {
//     greaterLessNum1 = GreaterLessUserField1.value;
//     greaterLessNum2 = GreaterLessUserField2.value;
//     GreaterLessText.innerText = await GreaterLessThan(greaterLessNum1, greaterLessNum2);
// })

// const GreaterLessThan = async (greaterLessNum1, greaterLessNum2) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/GreaterLess/GreaterLessThan/${greaterLessNum1}/${greaterLessNum2}`)
//     const data = await promise.text();
//     console.log(data);
//     return data;
// }


// Magic8GoBtn.addEventListener('click', async () => {
//     magic8Input = Magic8UserField.value;
//     Magic8Text.innerText = await Magic8Ball(magic8Input);
// })

// const Magic8Ball = async (magic8Input) => {
//     const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Magic8Ball/Magic8/${magic8Input}`);
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