// abc#
// [a] -> [a,b] -> [a,b,c] -> [a,b]

// create a new list
// if character is not #, than add it to new list
// else character is #, than remove last character from new list
// iterate over length of oldStr
// return new list

function strBackspace(oldStr) {
    let newStr = new Array();

    console.log("string length = ", oldStr.length);
    
    for(let i = 0; i < oldStr.length; i++) {
        if(oldStr.length === 0) {
            return newStr;
        }

        if(oldStr[i] !== '#') {
            newStr.push(oldStr[i]);
            console.log("push new string = ", newStr);
        } else if(oldStr[i] === '#') {
            newStr.pop();
            console.log("pop new string = ", newStr);
        }
    }

    return newStr;
}

// let result = strBackspace("abc#d#");
// console.log(result);

//              |     
// str1 = ['a', 'b']
// str2 = ['a', 'b']
//              |

// create two pointer, str1Pointer, str2Pointer
// if character at str1Pointer is equal to element at str2Pointer, than increment pointer to next character
// if character at str1Pointer is not equal to element at str2Pointer, then return false
// iterate while end of both list
// return true, since all the elements of both the list are equal
function strComp(str1, str2) {
    let str1Pointer = 0, str2Pointer = 0;

    for(let i = 0; i < str1.length; i++) {
        if(str1[str1Pointer] === str2[str2Pointer]) {
            console.log(`str1 {}`)
            console.log(`${str1[str1Pointer]} matched`);
            str1Pointer++;
            str2Pointer++;
        } else {
            console.log("character dont match");
            return false;
        }
    }

    return true;
}

// let result2 = strComp("abc", "abc");
// console.log("both strings matched = ", result2);

// take two strings as input
// perform backspace operation on both of them and return modified strings pair
// then perform string comparison for both strings

function backspaceStringCompare(str1, str2) {
    let str1Modified = strBackspace(str1);
    let str2Modified = strBackspace(str2);

    if(strComp(str1Modified, str2Modified)) {
        return true;
    } else {
        return false;
    }
}

console.log(backspaceStringCompare("a","aa#a"));
