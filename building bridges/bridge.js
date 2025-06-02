let currentselectedcharacter;
let currentselectedgender;
let currentselectedtrait;
let currentScene = 0;

function scrolldown(){
    window.scrollTo(0, document.body.scrollHeight);
}

function setGender(gender){
    console.log(gender);
    playEffectSound("audio/effectsound/join.wav");
    console.log(gender);
    currentselectedgender = gender;
    console.log(currentselectedgender);
    document.getElementById("selectedgender").innerText = "Selected: " + gender;
    scrolldown();
}

function setCharacter(character){
    playEffectSound("audio/effectsound/join.wav");
    console.log(character);
    currentselectedcharacter = character;
    console.log(currentselectedcharacter);
    document.getElementById("selectedcharacter").innerText = "Selected: " + character;
    scrolldown();
}

function setTraits(trait){
    playEffectSound("audio/effectsound/join.wav");
    console.log(trait);
    currentselectedtrait = trait;
    console.log(currentselectedtrait);
    document.getElementById("selectedtrait").innerText = "Selected: " + trait;
    scrolldown();
}

function submitgender(){
    playEffectSound("audio/effectsound/ok.wav");
    const maleClass = document.getElementById("malecharacterselectionid").classList
    const femaleClass = document.getElementById("femalecharacterselectionid").classList
    if (currentselectedgender === "Male") {
        maleClass.remove("hidden")
        femaleClass.add("hidden")
    }
    else {
        maleClass.add("hidden")
        femaleClass.remove("hidden")
    }
    scrolldown();
}

function submitcharacter(submission){
    playEffectSound("audio/effectsound/ok.wav");
    console.log(`submit is pressed`);
    let submittingcontent = document.getElementById(submission);
    console.log(submittingcontent);
    submittingcontent.classList.toggle("traitselectionclass");
    scrolldown();
}

function submittraits(submission){
    playEffectSound("audio/effectsound/ok.wav");
    console.log(`submit is pressed`);
    let submittingcontent = document.getElementById(submission);
    console.log(submittingcontent);
    submittingcontent.classList.toggle("beginstoryclass");
    scrolldown();
}

function beginGame(){
    // Example data to send
    const data1 = currentselectedgender;
    const data2 = currentselectedcharacter;
    const data3 = currentselectedtrait;

    const url = `gameplay.html?data1=${encodeURIComponent(data1)}&data2=${encodeURIComponent(data2)}&data3=${encodeURIComponent(data3)}`;
    window.location.href = url;
    
    getScene();
}

function setChapter(chapternumber){
    console.log(chapternumber);
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const data1 = urlParams.get('data1');
    const data2 = urlParams.get('data2');
    const data3 = urlParams.get('data3');
    currentselectedgender = data1;
    currentselectedcharacter = data2;
    currentselectedtrait = data3;

    // Do something with the received data
    console.log(`Received data1: ${data1}`);
    console.log(`Received data2: ${data2}`);
    console.log(`Received data3: ${data3}`);
    // document.getElementById('describehere').textContent = "Selected Character: " + data2;
})

var musicSound = document.getElementById('musicSound');
musicSound.loop = true;
var ambienceSound = document.getElementById('ambienceSound');
ambienceSound.loop = true;

function playmusicSound(audioname) {
    var audioElement = document.getElementById('musicSound');
    audioElement.src = audioname;
    audioElement.load();
    audioElement.play();
}

// function stopAudio() {
//     audio.pause();
//     audio.currentTime = 0;
// }

function playEffectSound(audioname) {
    var audioElement = document.getElementById('effectSound');
    audioElement.src = audioname;
    audioElement.load();
    audioElement.play();
}

function playAmbienceSound(audioname) {
    var audioElement = document.getElementById('ambienceSound');
    audioElement.volume = 0.5;
    audioElement.src = audioname;
    audioElement.load();
    audioElement.play();
}

let linesArray = [];

async function fetchData() {
    console.log(`running fetch data`);
    try {
        const response = await fetch('buildingbridgesscript.txt');
        const text = await response.text();
        linesArray = text.split('\n').filter(line => line.trim() !== '');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function hideEveryone(){
    Shahid.style.display = 'none';
    Maria.style.display = 'none';
    Annie.style.display = 'none';
    Josh.style.display = 'none';
    John.style.display = 'none';
    Title.style.display = 'none';
}

function centerPerson(movingperson){
    movingperson.style.display = 'block';
    movingperson.style.top = '50%';
    movingperson.style.left = '50%';
    movingperson.style.transform = 'translate(-50%, -50%)';
}

function leftPerson(movingperson){
    movingperson.style.display = 'block';
    movingperson.style.left = '210px';
}

function rightPerson(movingperson){
    movingperson.style.display = 'block';
    movingperson.style.left = '616px';
}

function nextScene(){
    currentScene++;
    if (currentScene > linesArray.length) {
        currentScene = 1;
    }
    getScene();
}

function prevScene(){
    currentScene--;
    if (currentScene < 0) {
        currentScene = 1; 
    }
    getScene();
}

document.addEventListener('DOMContentLoaded', () => {
    function handleKeyPress(event) {
        if (event.key === 'ArrowLeft') {
            prevScene();
        } else if (event.key === 'ArrowRight') {
            nextScene();
        }
    }

    function handleWheel(event) {
        if (event.deltaY < 0) {
            // Scrolled up
            prevScene();
        } else if (event.deltaY > 0) {
            // Scrolled down
            nextScene();
        }
    }

    // Add event listener for keyboard navigation
    document.addEventListener('keydown', handleKeyPress);

    // Add event listener for mouse wheel navigation
    document.addEventListener('wheel', handleWheel);
});