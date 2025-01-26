const OddEvenUserField = document.getElementById("OddEvenUserField");
const OddEvenGoBtn = document.getElementById("OddEvenGoBtn");
const OddEvenText = document.getElementById("OddEvenText");
const OddEvenAgainBtn = document.getElementById("OddEvenAgainBtn");

let oddEvenInput;

OddEvenGoBtn.addEventListener('click', async () => {
    oddEvenInput = OddEvenUserField.value;
    OddEvenText.innerText = await OddOrEven(oddEvenInput);
    OddEvenText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[2]";
    OddEvenAgainBtn.className = "text-2xl bg-white col-[3] row-[3] rounded-2xl border-3 m-3 flex justify-center items-center";
    OddEvenUserField.className = "hidden";
    OddEvenGoBtn.className = "hidden";
})

const OddOrEven = async (oddEvenInput) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/OddEven/OddEvenAnswer/${oddEvenInput}`);
    const data = await promise.text();
    console.log(data);
    return data;
}