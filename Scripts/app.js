


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

const RestaurantFastFoodBtn = document.getElementById("RestaurantFastFoodBtn");
const RestaurantPizzaBtn = document.getElementById("RestaurantPizzaBtn");
const RestaurantFoodTruckBtn = document.getElementById("RestaurantFoodTruckBtn");

let restaurantChoice = 'default';

const SayHello = async (sayHelloName) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/SayHello/SayHello/${sayHelloName}`);
    const data = await promise.text();
    console.log(data);
}


RestaurantFastFoodBtn.addEventListener('click', () => {
   RestaurantPicker('fast food');
})
RestaurantPizzaBtn.addEventListener('click', () => {
    RestaurantPicker('pizza');
})
RestaurantFoodTruckBtn.addEventListener('click', () => {
    RestaurantPicker('food truck');
})

const RestaurantPicker = async (restaurantChoice) => {
    let promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/RestaurantPicker/Pick/${restaurantChoice}`);
    let data = await promise.text();
    console.log(data);
    return data;
}