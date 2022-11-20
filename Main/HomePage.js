let clickingModeDynamicHard = document.getElementById("clickingModeDynamicHard");
let clickingModeDynamicEasy = document.getElementById("clickingModeDynamicEasy");
let clickingModeDynamicMedium = document.getElementById("clickingModeDynamicMedium");

let trackingModeContinuousEasy = document.getElementById("trackingModeContinuousEasy");
let trackingModeContinuousMedium = document.getElementById("trackingModeContinuousMedium");
let trackingModeContinuousHard = document.getElementById("trackingModeContinuousHard");

let trackingModeSwitchEasy = document.getElementById("trackingModeSwitchEasy");
let trackingModeSwitchMedium = document.getElementById("trackingModeSwitchMedium");
let trackingModeSwitchHard = document.getElementById("trackingModeSwitchHard");

let trackingModeCircleEasy = document.getElementById("trackingModeCircleEasy");
let trackingModeCircleMedium = document.getElementById("trackingModeCircleMedium");
let trackingModeCircleHard = document.getElementById("trackingModeCircleHard");

let clickingModeStaticEasy = document.getElementById("clickingModeStaticEasy");
let clickingModeStaticMedium = document.getElementById("clickingModeStaticMedium");
let clickingModeStaticHard = document.getElementById("clickingModeStaticHard");

let customClickingTaskObject = {
    sessionDuration: 60,
    circulationRadius: 150,
    spawnFrequency: 20,
    targetSpeed: 30,
    targetSize: 5,
    targetHealth: 10,
    maxTargets: 1,

}

clickingModeDynamicEasy.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 25;
    customClickingTaskObject.targetSpeed = 20;
    customClickingTaskObject.targetSize = 55;
    customClickingTaskObject.maxTargets = 7;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeDynamicMedium.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 25;
    customClickingTaskObject.targetSpeed = 30;
    customClickingTaskObject.targetSize = 35;
    customClickingTaskObject.maxTargets = 6;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeDynamicHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 25;
    customClickingTaskObject.targetSpeed = 30;
    customClickingTaskObject.targetSize = 25;
    customClickingTaskObject.maxTargets = 5;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeStaticHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 30;
    customClickingTaskObject.targetSpeed = 0;
    customClickingTaskObject.targetSize = 15;
    customClickingTaskObject.maxTargets = 5;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeStaticEasy.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 20;
    customClickingTaskObject.targetSpeed = 0;
    customClickingTaskObject.targetSize = 55;
    customClickingTaskObject.maxTargets = 10;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

clickingModeStaticMedium.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 20;
    customClickingTaskObject.targetSpeed = 0;
    customClickingTaskObject.targetSize = 25;
    customClickingTaskObject.maxTargets = 8;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='ClickingSession.html';
});

trackingModeContinuousEasy.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 0;
    customClickingTaskObject.targetSpeed = 25;
    customClickingTaskObject.targetSize = 65;
    customClickingTaskObject.maxTargets = 1;
    customClickingTaskObject.targetHealth = 1000;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeContinuousMedium.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 0;
    customClickingTaskObject.targetSpeed = 35;
    customClickingTaskObject.targetSize = 50;
    customClickingTaskObject.maxTargets = 1;
    customClickingTaskObject.targetHealth = 1000;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeContinuousHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 0;
    customClickingTaskObject.targetSpeed = 40;
    customClickingTaskObject.targetSize = 40;
    customClickingTaskObject.maxTargets = 1;
    customClickingTaskObject.targetHealth = 1000;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeSwitchEasy.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 10;
    customClickingTaskObject.targetSpeed = 15;
    customClickingTaskObject.targetSize = 55;
    customClickingTaskObject.maxTargets = 7;
    customClickingTaskObject.targetHealth = 7;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeSwitchMedium.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 10;
    customClickingTaskObject.targetSpeed = 20;
    customClickingTaskObject.targetSize = 45;
    customClickingTaskObject.maxTargets = 6;
    customClickingTaskObject.targetHealth = 8;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeSwitchHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.spawnFrequency = 10;
    customClickingTaskObject.targetSpeed = 20;
    customClickingTaskObject.targetSize = 35;
    customClickingTaskObject.maxTargets = 5;
    customClickingTaskObject.targetHealth = 9;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='TrackingSession.html';
});

trackingModeCircleEasy.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.targetSpeed = 50;
    customClickingTaskObject.targetSize = 90;
    customClickingTaskObject.circulationRadius = 250;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='CircleTrack.html';
});

trackingModeCircleMedium.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.targetSpeed = 65;
    customClickingTaskObject.targetSize = 60;
    customClickingTaskObject.circulationRadius = 180;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='CircleTrack.html';
});

trackingModeCircleHard.addEventListener( 'click', ( event ) => {
    customClickingTaskObject.sessionDuration = 60;
    customClickingTaskObject.targetSpeed = 75;
    customClickingTaskObject.targetSize = 40;
    customClickingTaskObject.circulationRadius = 150;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location='CircleTrack.html';
});