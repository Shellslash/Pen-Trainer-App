let clickingModeDynamicHard = document.getElementById("clickingModeDynamicHard");
let clickingModeStaticHard = document.getElementById("clickingModeStaticHard");
let trackingModeContinuousHard = document.getElementById("trackingModeContinuousHard");
let trackingModeSwitchHard = document.getElementById("trackingModeSwitchHard");
let trackingModeCircleHard = document.getElementById("trackingModeCircleHard");

let customClickingTaskObject = {
    sessionDuration: 60,
    circulationRadius: 150,
    spawnFrequency: 20,
    targetSpeed: 30,
    targetSize: 5,
    targetHealth: 10,
    maxTargets: 1,

}

clickingModeDynamicHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 25;
    customClickingTaskObject.targetSpeed = 30;
    customClickingTaskObject.targetSize = 25;
    customClickingTaskObject.maxTargets = 10;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeStaticHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 35;
    customClickingTaskObject.targetSpeed = 0;
    customClickingTaskObject.targetSize = 25;
    customClickingTaskObject.maxTargets = 10;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

trackingModeContinuousHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 0;
    customClickingTaskObject.targetSpeed = 45;
    customClickingTaskObject.targetSize = 45;
    customClickingTaskObject.maxTargets = 1;
    customClickingTaskObject.targetHealth = 1000;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeSwitchHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 10;
    customClickingTaskObject.targetSpeed = 20;
    customClickingTaskObject.targetSize = 45;
    customClickingTaskObject.maxTargets = 7;
    customClickingTaskObject.targetHealth = 10;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeCircleHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.targetSpeed = 75;
    customClickingTaskObject.targetSize = 40;
    customClickingTaskObject.circulationRadius = 100;


    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='CircleTrack.html';
});