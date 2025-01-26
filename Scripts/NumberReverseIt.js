const NumberReverseItUserField = document.getElementById("NumberReverseItUserField");
const NumberReverseItGoBtn = document.getElementById("NumberReverseItGoBtn");
const NumberReverseItText = document.getElementById("NumberReverseItText");
const NumberReverseItAgainBtn = document.getElementById("NumberReverseItAgainBtn");

let reverseItNum;

NumberReverseItGoBtn.addEventListener('click', async () => {
    reverseItNum = NumberReverseItUserField.value;
    NumberReverseItText.innerText = await ReverseItNumber(reverseItNum);
    NumberReverseItText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[3]";
    NumberReverseItAgainBtn.className = "text-2xl bg-white border-3 col-[2] row-[5] m-3 rounded-2xl mx-10 flex justify-center items-center";
    NumberReverseItUserField.className = "hidden";
    NumberReverseItGoBtn.className = "hidden";
})

const ReverseItNumber = async (reverseItNum) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/NumberReverse/NumberReverseIt/${reverseItNum}`);
    const data = await promise.text();
    console.log(data);
    return data;
}