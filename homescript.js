//Buttons
var Buttons1 = document.querySelector('#Buttons1').onclick = () => {fadeOut(iframe, 250); {setTimeout(HomeButton, 1000)}};
var Buttons2 = document.querySelector('#Buttons2').onclick = () => {fadeOut(iframe, 250); {setTimeout(AboutButton, 1000)}};
var Buttons3 = document.querySelector('#Buttons3').onclick = () => {fadeOut(iframe, 250); {setTimeout(ContactButton, 1000)}};
var Buttons4 = document.querySelector('#Buttons4').onclick = () => {fadeOut(iframe, 250); {setTimeout(PostsButton, 1000)}};
var Buttons5 = document.querySelector('#Buttons5').onclick = () => {fadeOut(iframe, 250); {setTimeout(PhotogButton, 1000)}};
var Buttons6 = document.querySelector('#Buttons6').onclick = () => {fadeOut(iframe, 250); {setTimeout(GuestbookButton, 1000)}};
var Buttons7 = document.querySelector('#Buttons7').onclick = () => {fadeOut(iframe, 250); {setTimeout(LinksButton, 1000)}};
var Buttons8 = document.querySelector('#Buttons8').onclick = () => {fadeOut(iframe, 250); {setTimeout(LinuxguideButton, 1000)}};
var MP3Buttons1 = document.querySelector('#MP3Buttons1').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons2').onclick = () => {document.getElementById('MP3Audio').src='./evergrowingnight.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons3').onclick = () => {document.getElementById('MP3Audio').src='./godonlyknows.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons4').onclick = () => {document.getElementById('MP3Audio').src='./killswitch.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons5').onclick = () => {document.getElementById('MP3Audio').src='./yararara.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons6').onclick = () => {document.getElementById('MP3Audio').src='./freefall.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons7').onclick = () => {document.getElementById('MP3Audio').src='./mewmewmagic.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons8').onclick = () => {document.getElementById('MP3Audio').src='./pigstep.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons9').onclick = () => {document.getElementById('MP3Audio').src='./Archie&MaxieTheme.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons10').onclick = () => {document.getElementById('MP3Audio').src='./sevenseas.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons11').onclick = () => {document.getElementById('MP3Audio').src='./sealedvessel.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons12').onclick = () => {document.getElementById('MP3Audio').src='./flowerman.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons13').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons14').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons15').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons16').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3Buttons17').onclick = () => {document.getElementById('MP3Audio').src='./beneaththevirtualsky.mp3'};
var MP3Buttons1 = document.querySelector('#MP3ButtonsFUH').onclick = () => {document.getElementById('MP3Audio').src='./fuhhh.mp3'};
var Buttonscrton = document.querySelector('#Buttonscrton').onclick = () => {Togglecrt()};
//End Buttons
//Buttons Functions
function HomeButton() {document.getElementById('Pages').src='./index4'}
function AboutButton() {document.getElementById('Pages').src='./index5'}
function ContactButton() {document.getElementById('Pages').src='./index6'}
function PostsButton() {document.getElementById('Pages').src='./index8'}
function PhotogButton() {document.getElementById('Pages').src='./index7'}
function GuestbookButton() {document.getElementById('Pages').src='./index9'}
function LinksButton() {document.getElementById('Pages').src='./index10'}
function LinuxguideButton() {document.getElementById('Pages').src='https://autumn-embers.github.io/autumns-linux-guides/'}
function TurnOncrt() {const element = document.getElementById("TheEntireHeckinWebsite"); element.classList.remove("blank"); element.classList.add("crt");}
function TurnOffcrt() {const element = document.getElementById("TheEntireHeckinWebsite"); element.classList.remove("crt"); element.classList.add("blank");}
function Togglecrt() {if(TheEntireHeckinWebsite.className == "blank") {TurnOncrt()} else{TurnOffcrt()}}
//End Buttons Functions
//iframe fade in
const PagesIframe = document.getElementById('Pages');
PagesIframe.addEventListener("load", () => {
    document.getElementById('Pages').style.opacity = '1';
});
//End iframe fade in
//iframe fade outs
var iframe = document.getElementById('Pages');

function fadeOut(el, duration) {


    var step = 10 / duration,
    opacity = 1;
    function next() {
        if (opacity <= 0) { return; }
        el.style.opacity = ( opacity -= step );
        setTimeout(next, 10);
    }
    next();
}
//End iframe fade outs
//Dropdowns for mp3 player
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//Start Clock function 
var dtbElement = document.getElementById('dtb');

function dtb() {
        dtbElement.textContent = new Date().toString();
    }
    
    setInterval(dtb, 1000);
//End Clock function


//Start Audioplayer
//Custom buttons
const audio = document.getElementById("MP3Audio");
const playPauseButton = document.getElementById("play-pause-button");
const volumeControl = document.getElementById("volume-control");
const progressBar = document.getElementById("progress-bar");
const currentTimeDisplay = document.getElementById("current-time");
const totalTimeDisplay = document.getElementById("total-time");
const loopButton = document.getElementById("loop-MP3-button");

let isPlaying = false;

playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseButton.textContent = "Play";
    } else {
        audio.play();
        playPauseButton.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
    audio.volume = volumeControl.value;
});

audio.addEventListener("timeupdate", () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    const totalMinutes = Math.floor(duration / 60);
    const totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
    totalTimeDisplay.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;

    const progress = (currentTime / duration) * 100;
    progressBar.style.width = `${progress}%`;
});
audio.loop = false;

loopButton.addEventListener("click", () => {
    audio.loop = !audio.loop;
    if (audio.loop) {
        loopButton.textContent = "Looping";
    } else {
        loopButton.textContent = "Loop";
    }
});
//End audio player Function
