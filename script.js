let btn=document.querySelector("#btn");
let content=document.querySelector("#content");
let voice=document.querySelector("#voice");

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1;
    text_speak.pitch=1;
    text_speak.volume=1;
    text_speak.lang="hi-GB";
    window.speechSynthesis.speak(text_speak)
};
function wise_me(){
    let day=new Date();
    let hour=day.getHours();
    if(hour>=0 && hour<=12){
        speak("good morning sir")
    }
    else if(hour>=12 && hour<=16){
        speak("good afternoon sir")
    }else{
        speak("good evening sir")
    }
};
window.addEventListener('load',()=>{
    wise_me();
});
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new SpeechRecognition();
recognition.onresult = (event) => {
  let currentidex=  event.resultIndex;
  let transcript= event.results[currentidex][0].transcript;
  content.innerText=transcript;
   takeCommmand(transcript.toLowerCase());
};
btn.addEventListener("click",()=>{
recognition.start();
btn.style.display="none";
voice.style.display="block"
});
function takeCommmand(message){
    btn.style.display="flex";
    voice.style.display="none";
    if(message.includes("hello")||message.includes("Hey")){
        speak("hello sir,how can i help you?")
    } 
    else if(message.includes("Hey,how are you?")){
        speak("i'm good sir,how can i help you")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://www.youtube.com/")
    }
  
    else if(message.includes("open facebook")){
        speak("opening facebook...")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator...")
        window.open("calculator://")
    }
    else{
        let finaltext="that i found regarding"+message.replace("zora","")
        speak(finaltext)
        window.open(`https://www.bing.com/search?q=${message.replace("zora","")}`)
    }
};