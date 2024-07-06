let wordToEncrypt = document.getElementById('input-user-text');
const btnEncrypt = document.getElementById('encriptar')
let display = document.getElementById('result-text');
let viewResult = document.getElementById('ocult');
let ocultInfoStar = document.getElementById('start-info');
let btnDesencriptar = document.getElementById('desencriptar');

//fill map with key and value
const dicctionario = new Map;
dicctionario.set("e","enter");
dicctionario.set("i","imes");
dicctionario.set("a","ai");
dicctionario.set("o","ober");
dicctionario.set("u","ufat");

//funtion to check if the input is valid
function isValid(word){
    return /^[a-z\s]+$/.test(word);
}

//funtion encryp
function encrypt(word){
    let w = "";
    for (let index = 0; index < word.length; index++) {
        
        if(dicctionario.get(word[index])){
            w+=dicctionario.get(word[index]);
        }else {
            w+= word[index]
        }
    }
    return w;
}

//event listener in btn encryp
btnEncrypt.addEventListener('click', ()=>{
    let wordInput = wordToEncrypt.value;

    if(!isValid(wordInput)){
        display.innerHTML = "Entrada invalida, solo letras minusculas y sin acentos ni simbolos, por favor.";
        return;
    }
    ocultInfoStar.style.display = 'none';
    viewResult.style.display = 'block';
    console.log(wordInput);

    //call the encrypt funtion
    const encryptWord = encrypt(wordInput);
    console.log(encryptWord);
    display.innerHTML = encryptWord;

})

 //call the desencrypt funtion
btnDesencriptar.addEventListener('click',()=>{
    let wordInput = wordToEncrypt.value;
    if(wordInput.trim()==""){
        display.innerHTML = "Entrada vacia."
        return;
    }
    
    console.log(wordInput)
    const des = desEncryptar(wordInput);
    ocultInfoStar.style.display = 'none';
    viewResult.style.display = 'block';
    console.log(des)
    display.innerHTML = des;
})

//funtion desEncryp
function desEncryptar(wordEncrypt){

    let arr = wordEncrypt.split("");
    let desEncrypt = "";
    for (let j = 0; j < arr.length; j++) {
        if(wordEncrypt[j]=="a"&& wordEncrypt[j+1]==="i"){
            desEncrypt+="a";
            j+=1;
        }else if(wordEncrypt[j]==="e"&&wordEncrypt[j+1]==="n"&&wordEncrypt[j+2]==="t"&&wordEncrypt[j+3]==="e"&&wordEncrypt[j+4]==="r"){
            desEncrypt+="e";
            j+=4;
        }else if(wordEncrypt[j]==="i"&&wordEncrypt[j+1]==="m"&&wordEncrypt[j+2]==="e"&&wordEncrypt[j+3]==="s"){
            desEncrypt+="i";
            j+=3;            
        }else if(wordEncrypt[j]==="o"&&wordEncrypt[j+1]=="b"&&wordEncrypt[j+2]==="e"&&wordEncrypt[j+3]==="r"){
            desEncrypt+="o";
            j+=3;
        }else if(wordEncrypt[j]==="u"&&wordEncrypt[j+1]==="f"&&wordEncrypt[j+2]==="a"&&wordEncrypt[j+3]==="t"){
            desEncrypt+="u";
            j+=3;
        }else{
            desEncrypt+=arr[j];
        }
    }
    return desEncrypt;
}


let btnCopy = document.getElementById('btn-copy');
btnCopy.addEventListener('click', copyToClipboard);

function copyToClipboard() {
    let textToCopy = document.getElementById('result-text').innerText;
            let tempInput = document.createElement('textarea');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);
}