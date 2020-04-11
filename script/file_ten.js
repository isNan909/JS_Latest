// String.prototype.matchAll


const str ="string1string2";
const regexValidationone = /s(t)(ring(\d?))/g;
console.log(str.match(regexValidationone));
console.log('---just match---'+ str.match(regexValidationone));
 

const string = "string1string2";
const regexValidationtwo = /s(t)(ring(\d?))/g;
const matches = string.matchAll(regexValidationtwo);
for (const string of matches){
    console.log(string);
}

