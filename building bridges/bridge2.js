async function getScene() {
    await fetchData(); 
    console.log(currentScene);
    console.log(linesArray.length);

    // const mapping = {
    //     a: {
    //         name: Shahid,
    //         location: "urlblabla"
    //     }
    // }
    
    let namemap = {'a': Shahid, 'b': Maria, 'c': Annie, 'd': Josh, 'e': John, 'z': Title};
    let locationmap = {'a': "url(images/background/classroommorningbackground.jpg)", 'b': 'url(images/background/maleroombackground.png)', 'c': 'url(images/background/shoppingstreetbackground.jpg)', 
    'd': 'url(images/background/fastfoodbackground.png)', 'e': 'url(images/background/maleroom.jpg)', 'f': 'url(images/background/classroomeveningbackground.jpg)', 
    'g': 'url(images/background/dinerbackground.jpeg)', 'h': 'url(images/background/shoppingmallbackground.jpg)', 'i': 'url(images/background/trainnight.jpg)', 
    'j': 'url(images/background/library.jpeg)'};
    let musicsoundmap = {'a': 'audio/musicsound/guguandrean.mp3', 'b': 'audio/musicsound/everytimeithink.mp3', 'c': 'audio/musicsound/DOG DAY.mp3', 'd': 'audio/musicsound/gawa ni irukara.mp3', 
    'e': 'audio/musicsound/Hopping Steps.mp3', 'f': 'audio/musicsound/whenchancedupon.mp3', 'g': 'audio/musicsound/reminisce.mp3'};
    let ambiencesoundmap = {'a': "audio/ambiencesound/crowd.mp3", 'b': "audio/ambiencesound/library.mp3", 'c': "audio/ambiencesound/room.mp3", 'd': "audio/ambience/train.mp3", 'e': ""};
    let effectsoundmap = {'a': "audio/effectsound/schoolbell.mp3", 'b': "audio/effectsound/close door.mp3", 'c': "audio/effectsound/walkaway.mp3", 'd': "", 'e': ""};
    let positioning = "[...]";
    console.log(`next line is to check the last fifth element`);
    console.log(linesArray[currentScene - 1].slice(-10, -9));

    if(linesArray[currentScene - 1].slice(-10, -9) === '['){
        console.log(`there is a []`);
        hideEveryone();
        positioning = linesArray[currentScene - 1].slice(-10);
        linesArray[currentScene - 1] = linesArray[currentScene - 1].slice(0, -10);
        console.log(`next line is the positioning`);
        console.log(positioning);
        if(positioning[1] != '.'){
            console.log(`there is a [left]`);
            leftPerson(namemap[positioning[1]]);
        }
        if(positioning[2] != '.'){
            console.log(`there is a [center]`);
            centerPerson(namemap[positioning[2]]);
        }
        if(positioning[3] != '.'){
            console.log(`there is a [right]`);
            rightPerson(namemap[positioning[3]]);
        }
        if(positioning[4] != '.'){
            console.log(`there is a [location]`);
            var screen = document.getElementById('screen');
            screen.style.backgroundImage = locationmap[positioning[4]];
        }
        if(positioning[5] != '.'){
            console.log(`there is a [musicaudio]`);
            playmusicSound(musicsoundmap[positioning[5]]);
        }
        if(positioning[6] != '.'){
            console.log(`there is a [ambienceaudio]`);
            playAmbienceSound(ambiencesoundmap[positioning[6]]);
        }
        if(positioning[7] != '.'){
            console.log(`there is a [soundeffectaudio]`);
            playEffectSound(effectsoundmap[positioning[7]]);
        }
    }

    console.log(linesArray[currentScene - 1]);
    document.getElementById('message').textContent = `${linesArray[currentScene - 1]}`;

    const colorMap = {
        "Shahid": "aqua",
        "Maria": "pink",
        "Annie": "yellow",
        "Josh": "greenyellow",
        "John": "wheat"
    };

    const speakername = linesArray[currentScene - 1].split(/[:(\s]/)[0]; 
    console.log(`next line is the speaker name`);
    console.log(speakername);
    message.style.backgroundColor = colorMap[speakername] || "white";
}