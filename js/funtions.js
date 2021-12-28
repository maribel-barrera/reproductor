var miVideo = document.getElementById("video1");

function playPause(){
    if(miVideo.paused)
        miVideo.play();
    else
        miVideo.pause();
}

function reload() { 
    miVideo.load(); 
}

function stop(){
    miVideo.pause();
    miVideo.currentTime = 0 ;
}

function makeSmall(){
    miVideo.width = 50;
}

function makeNormal(){

}