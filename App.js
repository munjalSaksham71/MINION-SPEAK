var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text) {
    return serverURL + "? " + "text= " + text;
}
 
function clickHandler() {
    var inputText = txtInput.value; //taking Input

    //Calling Server  For Processing 

    fetch(getTranslationURL(inputText))
    .then (response => response.json())
    .then (json => {
        var TranslatedText = json.contents.translated;
        txtOutput.innerHTML = TranslatedText;
    })

}

btnTranslate.addEventListener("click", clickHandler);