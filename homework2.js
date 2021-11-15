function calculator (num1, num2, oper){

    if (typeof num1==='number' && typeof num1==='number'){
        let output = 0
        switch(oper){
            case "+":
                output = num1+num2
                break
            case "-":
                output=num1-num2
                break
            case "*":
                output=num1 * num2
                break
            case "/":
                output=num1/num2
                break
            } console.log(output);
            return output
        } else {
            return NaN
    }
}



export {calculator}

