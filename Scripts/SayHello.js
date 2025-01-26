const SayHelloUserField = document.getElementById("SayHelloUserField");
const SayHelloGoBtn = document.getElementById("SayHelloGoBtn");
const SayHelloText = document.getElementById("SayHelloText");
const SayHelloAgainBtn = document.getElementById("SayHelloAgainBtn");

let helloName;

SayHelloGoBtn.addEventListener('click', async () => {
    helloName = SayHelloUserField.value;
    SayHelloText.innerText = await SayHello(helloName);
    SayHelloText.className = "flex justify-center align-middle text-2xl col-span-[5] row-[3]";
    SayHelloAgainBtn.className = "text-2xl bg-white border-3 col-[3] row-[4] m-3 rounded-2xl flex justify-center items-center";
    SayHelloGoBtn.className = "hidden";
    SayHelloUserField.className = "hidden";
})

const SayHello = async (sayHelloName) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/SayHello/SayHello/${sayHelloName}`);
    const data = await promise.text();
    console.log(data);
    return data;
}