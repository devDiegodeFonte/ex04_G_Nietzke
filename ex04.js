/*function Ler(){

    var n1 = parseInt(document.querySelector("#Num1").value);
    var n2 = parseInt(document.querySelector("#Num2").value);
    
    var somar = n1 + n2;
    var divir = n1 / n2;
    var subtr = n1 - n2;
    var multp = n1 * n2

    console.log("Primeiro número é "+n1);
    console.log("Segundo número é " + n2);
    console.log("O resultado da soma é " + somar);
    console.log("O resultado da divisão é " + divir);
    console.log("O resultado da subtração é  " + subtr);
    console.log("O resultado da multiplicação é " + multp);
     
}*/

function ler(){
        var n1 = parseInt(document.querySelector("#Num1").value)
        var n2 = parseInt(document.querySelector("#Num2").value)
        var selectOp = document.querySelector('input[name="operation"]:checked').value;// oeprção para usar o conteúdo 
        var nameOp, calculo;

        if(selectOp == 'adicao'){
                nameOp = 'Adição';
                calculo = n1 + n2
        } else if(selectOp == 'subtracao' ){
                nameOp = 'Subtração';
                calculo = n1 - n2
        }else if(selectOp =='divisao'){
                nameOp = 'Adição';
                calculo = n1 / n2
        }else {
                nameOp = 'Multiplicação'
                calculo = n1 * n2
        }
        alert(nameOp + ": " + calculo);
}