const GreaterLessUserField1 = document.getElementById("GreaterLessUserField1");
const GreaterLessUserField2 = document.getElementById("GreaterLessUserField2");
const GreaterLessGoBtn = document.getElementById("GreaterLessGoBtn");
const GreaterLessText = document.getElementById("GreaterLessText");
const GreaterLessAgainBtn = document.getElementById("GreaterLessAgainBtn");

let greaterLessNum1;
let greaterLessNum2;

GreaterLessGoBtn.addEventListener('click', async () => {
    greaterLessNum1 = GreaterLessUserField1.value;
    greaterLessNum2 = GreaterLessUserField2.value;
    GreaterLessText.innerText = await GreaterLessThan(greaterLessNum1, greaterLessNum2);
    GreaterLessText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[2]";
    GreaterLessAgainBtn.className = "text-2xl bg-white border-3 col-start-2 col-end-5 row-[3] m-3 rounded-2xl mx-50 flex justify-center items-center";
    GreaterLessUserField1.className = "hidden";
    GreaterLessUserField2.className = "hidden";
    GreaterLessGoBtn.className = "hidden";
})

const GreaterLessThan = async (greaterLessNum1, greaterLessNum2) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/GreaterLess/GreaterLessThan/${greaterLessNum1}/${greaterLessNum2}`)
    const data = await promise.text();
    console.log(data);
    return data;
}