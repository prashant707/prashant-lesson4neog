
//storing elements as object in variable
var translateButton = document.querySelector("#input-button");
var inputText = document.querySelector("#input-textarea");
var outputText = document.querySelector("#output-text");

//adding onclick eventlistener

translateButton.addEventListener('click',translateToBanana);


//

function translateToBanana(){
    console.log("hello clicked transalate button",translateButton);
    outputText.innerHTML = inputText.value;

}
