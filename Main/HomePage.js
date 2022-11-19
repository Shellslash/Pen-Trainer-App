let clickingModeDynamicHard = document.getElementById("clickingModeDynamicHard");
let clickingModeStaticHard = document.getElementById("clickingModeStaticHard");


let customClickingTaskObject = {
    sessionDuration: 60,
    spawnFrequency: 20,
    targetSpeed: 30,
    targetSize: 5
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