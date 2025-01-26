const RestaurantFastFoodBtn = document.getElementById("RestaurantFastFoodBtn");
const RestaurantPizzaBtn = document.getElementById("RestaurantPizzaBtn");
const RestaurantFoodTruckBtn = document.getElementById("RestaurantFoodTruckBtn");
const RestaurantText = document.getElementById("RestaurantText");
const RestaurantAgainBtn = document.getElementById("RestaurantAgainBtn");

let restaurantChoice;

RestaurantFastFoodBtn.addEventListener('click', async () => {
   RestaurantText.innerText = await RestaurantPicker('fast food');
   RestaurantAgainBtn.className = "text-2xl bg-white border-3 col-start-2 col-end-5 row-[5] rounded-2xl m-3 flex justify-center items-center";
   RestaurantFastFoodBtn.className = "hidden";
   RestaurantFoodTruckBtn.className = "hidden";
   RestaurantPizzaBtn.className = "hidden";
})
RestaurantPizzaBtn.addEventListener('click', async () => {
   RestaurantText.innerText = await RestaurantPicker('pizza');
   RestaurantAgainBtn.className = "text-2xl bg-white border-3 col-start-2 col-end-5 row-[5] rounded-2xl m-3 flex justify-center items-center";
   RestaurantFastFoodBtn.className = "hidden";
   RestaurantFoodTruckBtn.className = "hidden";
   RestaurantPizzaBtn.className = "hidden";
})
RestaurantFoodTruckBtn.addEventListener('click', async () => {
   RestaurantText.innerText = await RestaurantPicker('food truck');
   RestaurantAgainBtn.className = "text-2xl bg-white border-3 col-start-2 col-end-5 row-[5] rounded-2xl m-3 flex justify-center items-center";
   RestaurantFastFoodBtn.className = "hidden";
   RestaurantFoodTruckBtn.className = "hidden";
   RestaurantPizzaBtn.className = "hidden";
})

const RestaurantPicker = async (restaurantChoice) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/RestaurantPicker/Pick/${restaurantChoice}`);
    const data = await promise.text();
    console.log(data);
    return data;
}