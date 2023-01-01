
//storing elements as object in variable
var translateButton = document.querySelector("#input-button");
var inputText = document.querySelector("#input-textarea");
var outputText = document.querySelector("#output-text");

//adding onclick eventlistener

translateButton.addEventListener('click',translateToBanana);


//url:https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json
//https://api.funtranslations.com/translate/minion.json

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function createUrlParameter(inputTextValue){
    return serverUrl+"?"+"text="+inputTextValue ;

}

function translateToBanana(){
    console.log("hello clicked transalate button",translateButton);
    var url = createUrlParameter(inputText.value)
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json => {
        outputText.innerText = json.contents.translated;
        console.log(json.contents.translated)
    })
    .catch(()=>{
        outputText.innerText = "Too many request try after sometime!!!!!!!!!";
    });

}
