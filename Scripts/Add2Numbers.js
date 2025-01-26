const AddNumbersUserField1 = document.getElementById("AddNumbersUserField1");
const AddNumbersUserField2 = document.getElementById("AddNumbersUserField2");
const AddNumbersGoBtn = document.getElementById("AddNumbersGoBtn");
const AddNumbersText = document.getElementById("AddNumbersText");
const AddNumbersAgainBtn = document.getElementById("AddNumbersAgainBtn");

let addNum1;
let addNum2;

AddNumbersGoBtn.addEventListener('click', async () => {
    addNum1 = AddNumbersUserField1.value;
    addNum2 = AddNumbersUserField2.value;
    AddNumbersText.innerText = await Add2Numbers(addNum1, addNum2);
    AddNumbersText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[3]";
    AddNumbersAgainBtn.className = "text-2xl bg-orange-300 border-3 col-start-2 col-end-5 row-[5] m-3 mx-30 rounded-2xl flex justify-center items-center";
    AddNumbersUserField1.className = "hidden";
    AddNumbersUserField2.className = "hidden";
    AddNumbersGoBtn.className = "hidden";
})

const Add2Numbers = async (num1, num2) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Add2Num/Add/${num1}/${num2}`)
    const data = await promise.text();
    console.log(data);
    return data;
}