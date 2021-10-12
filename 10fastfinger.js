var field = document.getElementById('inputfield');
var words = document.getElementById('wordlist').innerHTML.split('|');
let word=0;
let char=0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
function doSomething() {
        if(field.value!=words[word]){
            field.value= field.value + words[word].charAt(char);
            char++;
        }
        else{
            var e = new Event('keyup');
            e.which = e.keyCode = 32;
            field.dispatchEvent(e);
            word++;
            char=0;
        }        
}
async function run(){
    await sleep(5000);
    while(word<words.length){
        await sleep(140);
        doSomething();
        if(document.getElementById('timer').innerHTML=='0:02') return; 
    }
    if(document.getElementById('timer').innerHTML=='0:02') return;   
}