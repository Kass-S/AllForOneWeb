const AlphnumericReverseItUserField = document.getElementById("AlphnumericReverseItUserField");
const AlphnumericReverseItGoBtn = document.getElementById("AlphnumericReverseItGoBtn");
const AlphnumericReverseItText = document.getElementById("AlphnumericReverseItText");
const AlphnumericReverseItAgainBtn = document.getElementById("AlphnumericReverseItAgainBtn");

let reverseItString;

AlphnumericReverseItGoBtn.addEventListener('click', async () => {
    reverseItString = AlphnumericReverseItUserField.value;
    AlphnumericReverseItText.innerText = await ReverseItAlphnumeric(reverseItString);
    AlphnumericReverseItText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[3]";
    AlphnumericReverseItAgainBtn.className = "text-2xl bg-white border-3 col-[2] row-[5] m-3 rounded-2xl mx-10 flex justify-center items-center";
    AlphnumericReverseItUserField.className = "hidden";
    AlphnumericReverseItGoBtn.className = "hidden";
})

const ReverseItAlphnumeric = async (reverseItString) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/StringReverse/ReverseIt/${reverseItString}`);
    const data = await promise.text();
    console.log(data);
    return data;
}