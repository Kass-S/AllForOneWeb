const Magic8UserField = document.getElementById("Magic8UserField");
const Magic8GoBtn = document.getElementById("Magic8GoBtn");
const Magic8Text = document.getElementById("Magic8Text");
const Magic8AgainBtn = document.getElementById("Magic8AgainBtn");

let magic8Input;

Magic8GoBtn.addEventListener('click', async () => {
    magic8Input = Magic8UserField.value;
    Magic8Text.innerText = await Magic8Ball(magic8Input);
    Magic8Text.className = "flex justify-center align-middle text-2xl col-span-[5] row-[3]";
    Magic8AgainBtn.className = "text-2xl bg-white border-3 col-[2] row-[5] m-3 rounded-2xl flex justify-center items-center";
    Magic8UserField.className = "hidden";
    Magic8GoBtn.classList = "hidden";
})

const Magic8Ball = async (magic8Input) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/Magic8Ball/Magic8/${magic8Input}`);
    const data = await promise.text();
    console.log(data);
    return data;
}