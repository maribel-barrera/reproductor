var miVideo = document.getElementById("video1");
var barra = document.getElementById("volumen");
var mute = document.getElementById("btnMute");
var oldvolume = 1;

var videoPlayList = [
    ["res/small.mp4", "res/small.ogv"],
    ["res/the-fly.mp3", "res/the-fly.oga"]
];
var videoPlaying = 0;

function playPause(){
    if(miVideo.paused)
        miVideo.play();
    else
        miVideo.pause();
}

function pause(){
    miVideo.pause();
}

function reload() { 
    miVideo.load(); 
}

function stop(){
    miVideo.pause();
    miVideo.currentTime = 0 ;
}

function mutedVideo(){
    if(miVideo.muted)
        miVideo.muted = false;
    else
        miVideo.muted = true;
}

function changeVolumen() {
    barra.addEventListener("change",function(ev){
        miVideo.volume = ev.target.value;	
        miVideo.muted = false;
    },true);

    mute.addEventListener("click",function(ev){
        if (ev.target.checked) {
            oldvolume = miVideo.volume;		
            miVideo.volume = 0;
            barra.value = 0;
        } else {
            miVideo.volume = oldvolume;
            barra.value = oldvolume;
        }
    },true);
}

function fastPlaySpeed(){
    miVideo.playbackRate = 2.5;
}

function slowPlaySpeed(){
    miVideo.playbackRate = 0.5;
}

function makeSmall(){
    miVideo.videoHeight = 300;
    miVideo.videoWidth = 500; 
}

function makeNormal(){
    miVideo.videoHeight = 360;
    miVideo.videoWidth = 640; 
}

function showMetadata (id){
    var video = document.getElementById(id);
    text.value = "Duracion = " + video.duration + " segundos \n";
    text.value += "Height = " + video.videoHeight + "\n";
    text.value += "Width = " + video.videoWidth + "\n";
}

function switchVideos (){
    videoPlaying++;
    if (videoPlaying == videoPlayList.length)
        videoPlaying = 0;

    media.pause();

    video1.src = videoPlayList[videoPlaying][0];
    video2.src = videoPlayList[videoPlaying][1];

    media.load();
    media.play();
}

function takeSnapShot() {
    var canvasContext = frame.getContext("2d");
    canvasContext.drawImage(miVideo,0,0,480,320);
}

function run (){
    var video = document.getElementById('video1');
    var tracks = document.getElementsByTagName('track');
    var values = document.getElementById('values')
    
    function trackloaded(evt){
        values.innerHTML += "Track loaded : " + evt.target.label + " track <br/>";
    }
    function trackerror(evt){
        values.innerHTML += "Track error: " + evt.target.label + " track <br/>";
        tracks[1] = track.mode = "showing";
    }
    function cuechange(evt){
        values.innerHTML += "Cue change : " + evt.target.label + " track <br/>";
    }

    for (var i=0 ; i < tracks.length ; i ++){
        tracks[i].addEventListener(" load", trackloaded);
        tracks[i].addEventListener(" error", trackerror);
        tracks[i].addEventListener("cuechange ", cuechange);
    }
}