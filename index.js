
function encrypt(string,shift){
    let charCodes = [];
    for(let i=0; i < string.length;i++){
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const lower = "abcdefghijklmnopqrstuvwxyz"
        if(upper.includes(string[i])){
            const upperIndex = (upper.indexOf(string[i])+Number(shift)+26) % 26;
            const code = upper.charCodeAt(upperIndex);
            charCodes.push(code);
        }
        else if(lower.includes(string[i])){
            const lowerIndex = (lower.indexOf(string[i])+Number(shift)+26)%26;
            const code = lower.charCodeAt(lowerIndex);
            charCodes.push(code);
        }
        else{
            charCodes.push(string.charCodeAt(i));
        }
    }
    let encryptedString = ""
    for(let i=0; i<charCodes.length;i++){
        let char = String.fromCharCode(charCodes[i]);
        encryptedString+=char;
    }
    return encryptedString
}



function updateOutput(){
    const mode = document.getElementById("mode");
    const input = document.getElementById("input");
    const shift = document.getElementById("shifts");
    if(shift.value>26){
        shift.value = 26;
    }
    else if(shift.value<0){
        shift.value=0;
    }
    if(mode.value=="Encrypt"){
        const output = document.getElementById("output");
        const outputString = encrypt(input.value,shift.value);
        output.value = outputString;
    }
    else{
        const output = document.getElementById("output");
        const outputString = encrypt(input.value,-shift.value);
        output.value = outputString;
    }
}