let sliderSpeed = document.getElementById("sliderSpeed");
let outputSpeed = document.getElementById("valueSpeed");

let sliderSessionDuration = document.getElementById("sliderSessionDuration");
let outputSessionDuration = document.getElementById("valueSessionDuration");

let sliderCirculationRadius = document.getElementById("sliderCirculationRadius");
let outputCirculationRadius = document.getElementById("valueCirculationRadius");

let sliderSize = document.getElementById("sliderSize");
let outputSize = document.getElementById("valueSize");

let startButton = document.getElementById("startButton")

let sessionDuration = sliderSessionDuration.value;

let speed = sliderSpeed.value;
let size = sliderSize.value;
let circulationRadius = sliderCirculationRadius.value;

let customClickingTaskObject = {
    sessionDuration: sessionDuration,
    circulationRadius: circulationRadius,
    targetSpeed: speed,
    targetSize: size
}

outputSpeed.innerHTML = sliderSpeed.value;
outputCirculationRadius.innerHTML = sliderCirculationRadius.value;
outputSize.innerHTML = sliderSize.value;
outputSessionDuration.innerHTML = sliderSessionDuration.value;

sliderSpeed.oninput = function(){
    outputSpeed.innerHTML = this.value;
}

sliderCirculationRadius.oninput = function(){
    outputCirculationRadius.innerHTML = this.value;
}

sliderSize.oninput = function(){
    outputSize.innerHTML = this.value;
}

sliderSessionDuration.oninput = function(){
    outputSessionDuration.innerHTML = this.value;
}

startButton.addEventListener( 'click', ( event ) => {

    customClickingTaskObject.sessionDuration = outputSessionDuration.innerHTML;
    customClickingTaskObject.circulationRadius = outputCirculationRadius.innerHTML;
    customClickingTaskObject.targetSpeed = outputSpeed.innerHTML;
    customClickingTaskObject.targetSize = outputSize.innerHTML;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));

    document.location='CircleTrack.html';
});