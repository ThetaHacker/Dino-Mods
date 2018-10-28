/* Fly Mod
to deploy flying after install press "W",
Then press Space
Control up-down with "W" and "S"
*/

Runner.instance_.updateConfigSetting("INITIAL_JUMP_VELOCITY",1)
var uptrig = document.body;
    uptrig.addEventListener("keydown", function(e) {if (e.keyCode === 87) {
        Runner.instance_.updateConfigSetting("GRAVITY",-2)
		console.log("up")
    }});
var downtrig = document.body;
    downtrig.addEventListener("keydown", function(e) {if (e.keyCode === 83) {
        Runner.instance_.updateConfigSetting("GRAVITY",0.2)
		console.log("nup")
    }});

/* Immortal Mod
Allows passing though of objects
*/

Runner.instance_.gameOver = function() {}

/* Time Pause Mod
Press "B" to pause time
*/
