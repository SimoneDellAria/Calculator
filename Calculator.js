

let first_num = "";
let second_num = "";
let res;
let sign = "";
let original_text = "";
let dot = false;



function computeOperation(first_value, second_value){

    switch (sign){
        case "+": res = Number(first_value) + Number(second_value);
        break;
        case "-": res = first_value - second_value;
        break;
        case "*": res = first_value * second_value;
        break;
        case "/": res = first_value / second_value;
        break;
    }
    document.getElementById("text_res").value = res;
    first_num = "";
    second_num = "";
    sign = "";
    dot = false;

}


function checkCondition(){

    if(second_num !== ""){
        if (res == undefined){
            computeOperation(first_num,second_num);
        }
        else{
            computeOperation(res,second_num);
        }
    }
}


function getOperator(op_sign){
    if (sign === ""){
        if (first_num != "" || res != undefined){
            sign = op_sign;
            document.getElementById("text_res").value += sign;
            dot = false;
        }
    }
}


function getInputKeyboard(input_val){

    if (res == undefined){
        if (sign === ""){
            if (first_num ==="" && input_val === "."){
                input_val = "0.";
            }
            first_num += input_val;
            console.log(first_num);
            document.getElementById("text_res").value = first_num;
        }
        else{
            if (second_num === ""){
                if (input_val === "."){
                    input_val = "0.";
                }
                console.log("Valore corrente del secondo numero: " + second_num);
                original_text = document.getElementById("text_res").value;
                console.log("Testo iniziale: " + original_text);
            }
            second_num += input_val;
            console.log("Valore dopo incremento: " + second_num);
            document.getElementById("text_res").value = original_text + second_num;
        }
    }
    else{
        if (sign === ""){
            resetCalculator();
            getInputKeyboard(input_val);
        }
        else{
            if (second_num === ""){
                if (input_val === "."){
                    input_val = "0.";
                }
                console.log("Valore corrente del secondo numero: " + second_num);
                original_text = document.getElementById("text_res").value;
                console.log("Testo iniziale: " + original_text);
            }
            second_num += input_val;
            console.log("Valore dopo incremento: " + second_num);
            document.getElementById("text_res").value = original_text + second_num;
        }
    }
}

function addDot(){
    if (!dot){
        getInputKeyboard('.');
    }
    dot = true;
}

function resetCalculator(){
    first_num = "";
    second_num = "";
    res = undefined;
    sign = "";
    dot = false;
    document.getElementById("text_res").value = "0";
}

