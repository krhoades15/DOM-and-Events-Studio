// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function () {
    console.log('it loaded');

    document.getElementById('takeoff').onclick = function() {
        if(confirm('Confirm that the shuttle is ready for take off.')) {
            document.getElementById('flightStatus').innerHTML = 'Shuttle in flight';
            document.getElementById('shuttleBackground').style.background = 'blue';
            document.getElementById('spaceShuttleHeight').innerHTML = 10000;
    }
    }
    
    document.getElementById('landing').onclick = function() {
        alert('The shuttle is landing. Landing gear engaged.');
        document.getElementById('flightStatus').innerHTML = 'The shuttle has landed.';
        document.getElementById('shuttleBackground').style.background = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;
    }

    document.getElementById('missionAbort').onclick = function () {
        if(confirm('Confirm that you want to abort the mission.')) {
            document.getElementById('flightStatus').innerHTML = 'Mission aborted';
            document.getElementById('shuttleBackground').style.background = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;   
        }
    }

    document.getElementById('up').onclick = function () {
        document.getElementById('rocket').style.paddingBottom = '10px';
        document.getElementById('spaceShuttleHeight').innerHTML = 10000;
    }
    document.getElementById('down').onclick = function () {
        document.getElementById('rocket').style.marginBottom = '-10px';
        document.getElementById('spaceShuttleHeight').innerHTML = -10000;
    }
    document.getElementById('right').onclick = function () {
        document.getElementById('rocket').style.paddingRight = '10px';
    }
    document.getElementById('left').onclick = function () {
        document.getElementById('rocket').style.paddingLeft = '10px';
    }


});



