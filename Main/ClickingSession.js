
const timer = document.querySelector( '#time' )
const board = document.querySelector( '#board' )
const scoreCounter = document.querySelector( '#score' )

let time = JSON.parse(window.localStorage.getItem('customTask')).sessionDuration;
let spawnFrequency = JSON.parse(window.localStorage.getItem('customTask')).spawnFrequency;
let maxTargets = JSON.parse(window.localStorage.getItem('customTask')).maxTargets;
let targetSize = JSON.parse(window.localStorage.getItem('customTask')).targetSize;
let targetSpeed = JSON.parse(window.localStorage.getItem('customTask')).targetSpeed;
let currentNumberOfTargets = 0;
let score = 0


 board.addEventListener( 'mousedown', ( event ) => {
     if ( event.target.classList.contains( 'circle' )) {
         score++
         scoreCounter.innerHTML = score;
         event.target.remove()
         currentNumberOfTargets--;
         if(spawnFrequency==0){
            createRandomCircle()
         }
    }
 })

function startGame() {
    gameInterval = setInterval( decreaseTime, 1000 )
    setTime( time )
    createRandomCircle()
}

startGame()

if(spawnFrequency > 0){
    spawnInterval = setInterval(spawnTimerFunction, 10000/spawnFrequency)
}

function spawnTimerFunction() {
    createRandomCircle()
}

function decreaseTime() {
    if ( time === 0) {
        finishGame()
    } else {
        let current = --time
        if ( current < 10 ) {
            current = `0${ current }`
        }
        setTime( current )
    }
}

function setTime( value ) {
    timer.innerHTML = `${ value }`
}

function finishGame() {
    board.innerHTML = `<h1>Final score: <span class="primary" >${ score }</span></h1>`
    timer.parentElement.classList.add( 'hidden' )
    clearInterval(spawnInterval);
    clearInterval(gameInterval);
}

function createRandomCircle() {
    if(currentNumberOfTargets < maxTargets){
        currentNumberOfTargets++;
        const circle = document.createElement( 'div' )
        const circleSize = getRandomNumber( targetSize, targetSize )
        const { width, height } = board.getBoundingClientRect()
    
        const x = getRandomNumber( 0, width - circleSize )
        const y = getRandomNumber( 0, height - circleSize )
    
        circle.classList.add( 'circle' )
        circle.style.width = `${ circleSize }px`
        circle.style.height = `${ circleSize }px`
        circle.style.left = `${ x }px`
        circle.style.top = `${ y }px`
    
        board.append( circle )
    
        if(targetSpeed > 0){
            animateTarget()
        }
    }
}


function getRandomNumber( min, max ) {
    return Math.round( Math.random() * ( max - min ) + min )
}

function getRandomColor() {
    const index = Math.floor( Math.random() * colors.length )
    return colors[ index ]
}


function makeNewPosition(){
    
    var h = $(window).height() - 300;
    var w = $(window).width() - 400;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateTarget(){
    var newq = makeNewPosition();
    var oldq = $('.circle').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.circle').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateTarget();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = targetSpeed/100;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}