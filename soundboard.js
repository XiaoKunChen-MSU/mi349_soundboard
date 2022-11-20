var sound1 = document.getElementById('alarm')
var sound2 = document.getElementById('disconnect')
var sound3 = document.getElementById ('clock')

function alarmBeep(){
  sound1.play();
}

function disconnect(){
  sound2.play();
}

function clock(){
  sound3.play();
}