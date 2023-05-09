let sliderSpeed = document.getElementById("sliderSpeed");
let outputSpeed = document.getElementById("valueSpeed");

let sliderMaxTargets = document.getElementById("sliderMaxTargets");
let outputMaxTargets = document.getElementById("valueMaxTargets");

let sliderSpawnFrequency = document.getElementById("sliderSpawnFrequency");
let outputSpawnFrequency = document.getElementById("valueSpawnFrequency");

let sliderSessionDuration = document.getElementById("sliderSessionDuration");
let outputSessionDuration = document.getElementById("valueSessionDuration");

let sliderSize = document.getElementById("sliderSize");
let outputSize = document.getElementById("valueSize");

let startButton = document.getElementById("startButton")

let sessionDuration = sliderSessionDuration.value;
let spawnFrequency = sliderSpawnFrequency.value;
let maxTargets = sliderMaxTargets.value;
let speed = sliderSpeed.value;
let size = sliderSize.value;

let customClickingTaskObject = {
    spawnFrequency: spawnFrequency,
    sessionDuration: sessionDuration,
    targetSpeed: speed,
    maxTargets: maxTargets,
    targetSize: size
}

outputSpawnFrequency.innerHTML = sliderSpawnFrequency.value;
outputSpeed.innerHTML = sliderSpeed.value;
outputSize.innerHTML = sliderSize.value;
outputSessionDuration.innerHTML = sliderSessionDuration.value;
outputMaxTargets.innerHTML = sliderMaxTargets.value;

sliderSpeed.oninput = function(){
    outputSpeed.innerHTML = this.value;
}

sliderSpawnFrequency.oninput = function(){
    outputSpawnFrequency.innerHTML = this.value;
}

sliderMaxTargets.oninput = function(){
    outputMaxTargets.innerHTML = this.value;
}

sliderSize.oninput = function(){
    outputSize.innerHTML = this.value;
}

sliderSessionDuration.oninput = function(){
    outputSessionDuration.innerHTML = this.value;
}

startButton.addEventListener( 'click', ( event ) => {

    customClickingTaskObject.sessionDuration = outputSessionDuration.innerHTML;
    customClickingTaskObject.spawnFrequency = outputSpawnFrequency.innerHTML;
    customClickingTaskObject.maxTargets = outputMaxTargets.innerHTML;
    customClickingTaskObject.targetSpeed = outputSpeed.innerHTML;
    customClickingTaskObject.targetSize = outputSize.innerHTML;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));

    document.location='ClickingSession.html';
});