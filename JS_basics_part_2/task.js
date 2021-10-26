// 1. Write a JavaScript function to check if given string includes given symbol.

function checkSymbol(str, symb){
    if (str.toLowerCase().includes(symb)){
        console.log(`Given string includes symbol ${symb}`);
    } else {
        console.log(`Given string does not include symbol ${symb}`);
    }
}

checkSymbol('Javascript language', 's')

// 2. Write a JavaScript function to check whether a string is blank or not (string with spaces should be also blank).

function isBlank(str){
    if(str.trim().length === 0){
        console.log('Srting is empty or only spaces');
    } else {
        console.log('String is not empty');
    }
}
isBlank('   ')


// 3. Write a JavaScript function to convert a string in abbreviated form. console.log(abbrev (“Name Surname")) – should be“N.S.” (should convert lower case names to upper)


function abbrev(str){
    let name1= str.trim().split(' ');
    let name2 = name1[0].charAt(0).toUpperCase() + "." + name1[1].charAt(0).toUpperCase() + "."
    return name2
}

console.log(abbrev('Liliya varyvoda'));

// 4. Write a JavaScript function that accept two integers and display the larger

function displayBigger(a,b){
    if (a>b){
        console.log(a);
    } else{
        console.log(b);
    }
}

displayBigger(6,9)


// 5. Write a JavaScript function with conditional statement to sort three numbers

function mySorting(a,b,c){
    if(a>b && a>c){
        if(b>c){
            console.log(a,b,c);
        } else{
            console.log(a,c,b);
        }
    } else if(b>a && b>c){
        if(a>c){
            console.log(b,a,c);
        } else{
            console.log(b,c,a);
        }
    } else if(c>a && c>b){
        if (a>b){
            console.log(c,a,b);
        } else{
            console.log(c,b,a);
        }
    }
}

mySorting(9,8,18)