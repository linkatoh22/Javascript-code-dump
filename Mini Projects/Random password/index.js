const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length,includeLowerCase,includeNumbers,includeSymbols,includeUpperCase)
{
    const lowercaseChars ="abcdefghijklnmopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLNMOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars ="!@#$%^&*()_-+=~";
    let value,randNum;
    const password= [];
    const lowerChar = lowercaseChars.split('');
    const upperChar = uppercaseChars.split('');
    const numberChar= numberChars.split('');
    const symbolChar = symbolChars.split('');
    for(let i=0;i<length;i++)
    {
        value = Math.floor(Math.random() * 4) + 1;
        switch(value)
        {
            case 1:
                randNum= Math.floor(Math.random() * lowerChar.length);
                password.push(lowerChar[randNum]);
                break;
            case 2:
                randNum= Math.floor(Math.random() * upperChar.length);
                password.push(upperChar[randNum]);
                break;
            case 3:
                randNum= Math.floor(Math.random() * numberChar.length);
                password.push(numberChar[randNum]);
                break;
            case 4:
                randNum= Math.floor(Math.random() * symbolChar.length);
                password.push(symbolChar[randNum]);
                break;
            default:
                break;
        }
    }
    let realPassword=[...password].join("");
    console.log(realPassword);
    return realPassword;
}

const password = generatePassword(passwordLength
    ,includeLowerCase
    ,includeNumbers
    ,includeSymbols
    ,includeUpperCase);

console.log(`Generated password: ${password}`);