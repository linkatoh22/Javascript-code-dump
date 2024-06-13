const passwordLength = 5;

function generatePassword(length)
{
    if(length>0){
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
    else
    {
        console.log("Length must be larger than 0");
    }
}

const password = generatePassword(passwordLength);

console.log(`Generated password: ${password}`);