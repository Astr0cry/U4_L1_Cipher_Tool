
function encrypt(string,shift){
    let charCodes = [];
    for(let i=0; i < string.length;i++){
        const code = string.charCodeAt(i) +shift;
        charCodes.push(Number(code));
    }
    let encryptedString = ""
    for(let i=0; i<charCodes.length;i++){
        const char = String.fromCharCode[charCodes[i]];
        console.log(String.fromCharCode[charCodes]);
        encryptedString+=char;
    }
    return encryptedString
}



function updateOutput(){
    const mode = document.getElementById("mode");
    const input = document.getElementById("input");
    const shift = document.getElementById("shift");
    const output = document.getElementById("output");

    if(mode.value=="Encrypt"){
        encrypt(input.value,shift.value);
    }
}

console.log(encrypt("hello World",1));