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

function updateCustomTaskAndRedirect(sessionDuration, spawnFrequency, targetSpeed, targetSize, maxTargets, targetHealth, circulationRadius, location) {
    customClickingTaskObject.sessionDuration = sessionDuration;
    customClickingTaskObject.spawnFrequency = spawnFrequency;
    customClickingTaskObject.targetSpeed = targetSpeed;
    customClickingTaskObject.targetSize = targetSize;
    customClickingTaskObject.maxTargets = maxTargets;
    customClickingTaskObject.targetHealth = targetHealth;
    customClickingTaskObject.circulationRadius = circulationRadius;

    window.localStorage.setItem("customTask", JSON.stringify(customClickingTaskObject));
    document.location = location;
}

// Configuration for each mode
const modes = [
    // Clicking Mode Dynamic
    { mode: "clickingModeDynamicEasy", sessionDuration: 60, spawnFrequency: 25, targetSpeed: 20, targetSize: 55, maxTargets: 7, location: "ClickingSession.html" },
    { mode: "clickingModeDynamicMedium", sessionDuration: 60, spawnFrequency: 25, targetSpeed: 30, targetSize: 35, maxTargets: 6, location: "ClickingSession.html" },
    { mode: "clickingModeDynamicHard", sessionDuration: 60, spawnFrequency: 25, targetSpeed: 30, targetSize: 25, maxTargets: 5, location: "ClickingSession.html" },

    // Clicking Mode Static
    { mode: "clickingModeStaticEasy", sessionDuration: 60, spawnFrequency: 20, targetSpeed: 0, targetSize: 55, maxTargets: 10, location: "ClickingSession.html" },
    { mode: "clickingModeStaticMedium", sessionDuration: 60, spawnFrequency: 20, targetSpeed: 0, targetSize: 25, maxTargets: 8, location: "ClickingSession.html" },
    { mode: "clickingModeStaticHard", sessionDuration: 60, spawnFrequency: 30, targetSpeed: 0, targetSize: 15, maxTargets: 5, location: "ClickingSession.html" },

    // Tracking Mode Continuous
    { mode: "trackingModeContinuousEasy", sessionDuration: 60, spawnFrequency: 0, targetSpeed: 25, targetSize: 65, maxTargets: 1, targetHealth: 1000, location: "TrackingSession.html" },
    { mode: "trackingModeContinuousMedium", sessionDuration: 60, spawnFrequency: 0, targetSpeed: 35, targetSize: 50, maxTargets: 1, targetHealth: 1000, location: "TrackingSession.html" },
    { mode: "trackingModeContinuousHard", sessionDuration: 60, spawnFrequency: 0, targetSpeed: 40, targetSize: 40, maxTargets: 1, targetHealth: 1000, location: "TrackingSession.html" },

    // Tracking Mode Switch
    { mode: "trackingModeSwitchEasy", sessionDuration: 60, spawnFrequency: 10, targetSpeed: 15, targetSize: 55, maxTargets: 7, targetHealth: 7, location: "TrackingSession.html" },
    { mode: "trackingModeSwitchMedium", sessionDuration: 60, spawnFrequency: 10, targetSpeed: 20, targetSize: 45, maxTargets: 6, targetHealth: 8, location: "TrackingSession.html" },
    { mode: "trackingModeSwitchHard", sessionDuration: 60, spawnFrequency: 10, targetSpeed: 20, targetSize: 35, maxTargets: 5, targetHealth: 9, location: "TrackingSession.html" },

    // Tracking Mode Circle
    { mode: "trackingModeCircleEasy", sessionDuration: 60, targetSpeed: 50, targetSize: 90, circulationRadius: 250, location: "CircleTrack.html" },
    { mode: "trackingModeCircleMedium", sessionDuration: 60, targetSpeed: 65, targetSize: 60, circulationRadius: 180, location: "CircleTrack.html" },
    { mode: "trackingModeCircleHard", sessionDuration: 60, targetSpeed: 75, targetSize: 40, circulationRadius: 150, location: "CircleTrack.html" }
];

// Attach event listeners for each mode
modes.forEach(({ mode, sessionDuration, spawnFrequency, targetSpeed, targetSize, maxTargets, targetHealth, circulationRadius, location }) => {
    const element = document.getElementById(mode);
    if (element) {
        element.addEventListener('click', (event) => {
            updateCustomTaskAndRedirect(sessionDuration, spawnFrequency, targetSpeed, targetSize, maxTargets, targetHealth, circulationRadius, location);
        });
    }
});
