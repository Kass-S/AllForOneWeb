const MadLibNounUserField = document.getElementById("MadLibNounUserField");
const MadLibAnimalUserField = document.getElementById("MadLibAnimalUserField");
const MadLibNameUserField = document.getElementById("MadLibNameUserField");
const MadLibDifferentNameUserField = document.getElementById("MadLibDifferentNameUserField");
const MadLibEmotionUserField = document.getElementById("MadLibEmotionUserField");
const MadLibActionUserField = document.getElementById("MadLibActionUserField");
const MadLibJobUserField = document.getElementById("MadLibJobUserField");
const MadLibStructureUserField = document.getElementById("MadLibStructureUserField");
const MadLibGoBtn = document.getElementById("MadLibGoBtn");
const MadLibText = document.getElementById("MadLibText");
const MadLibAgainBtn = document.getElementById("MadLibAgainBtn");

let madLibNoun;
let madLibAnimal;
let madLibName;
let madLibDifferentName;
let madLibEmotion;
let madLibAction;
let madLibJob;
let madLibStructure;

MadLibGoBtn.addEventListener('click', async () => {
    madLibNoun = MadLibNounUserField.value;
    madLibAnimal = MadLibAnimalUserField.value;
    madLibName = MadLibNameUserField.value;
    madLibDifferentName = MadLibDifferentNameUserField.value;
    madLibEmotion = MadLibEmotionUserField.value;
    madLibAction = MadLibActionUserField.value;
    madLibJob = MadLibJobUserField.value;
    madLibStructure = MadLibStructureUserField.value;
    MadLibText.innerText = await MadLib(madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure);
    MadLibText.className = "flex justify-start align-middle text-2xl col-span-[5] row-start-2 row-end-6 mx-10 mt-5";
    MadLibAgainBtn.className = "text-2xl bg-white col-start-2 col-end-5 row-[6] rounded-2xl border-3 m-3 mx-30 flex justify-center items-center";
    MadLibNounUserField.className = "hidden";
    MadLibAnimalUserField.className = 'hidden';
    MadLibNameUserField.className = "hidden";
    MadLibDifferentNameUserField.className = "hidden";
    MadLibEmotionUserField.className = "hidden";
    MadLibActionUserField.className = "hidden";
    MadLibJobUserField.className = "hidden";
    MadLibStructureUserField.className = "hidden";
    MadLibGoBtn.className = "hidden";
})

const MadLib = async (madLibNoun, madLibAnimal, madLibName, madLibDifferentName, madLibEmotion, madLibAction, madLibJob, madLibStructure) => {
    const promise = await fetch(`https://kspacekallforone-hfdea4h9dre7adfd.westus-01.azurewebsites.net/MadLib/MadLibStory/${madLibNoun}/${madLibAnimal}/${madLibName}/${madLibDifferentName}/${madLibEmotion}/${madLibAction}/${madLibJob}/${madLibStructure}`);
    const data = await promise.text();
    console.log(data);
    return data;
}