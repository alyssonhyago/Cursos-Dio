
function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração (-)\n 3 - Multiplicação(*)\n 4 - Divisão (/)\n '));
    
    if(!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    }
    else{
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;
        if(!n1 || !n2){
            alert('Erro - parâmetro inválido!')
            calculadora();
        }
        else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                denovo();
                }
        
                function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                denovo();
                };
        
                function multiplica(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                denovo();
                }
        
                function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                denovo();
                }
        
                function denovo(){
                    let opcao = prompt('Deseja fazer outra operação? \n 1 - sim\n 2 - não')
                    if (opcao == 1){
                    calculadora();
                    }
                
                    else if (opcao == 2){
                    alert('Até a próxima!');
                    
                    }
                    else {
                    alert('Digite uma opção válida');
                    denovo();
                    }
            
                }   
        
        
                if (operacao == 1){
                soma();
                }
                else if (operacao == 2){
                subtracao();
                }
                else if (operacao == 3){
                multiplica();
                }
                else if (operacao == 4) {
                divisao();
                }
        }

        
    }
    
    

    
}


calculadora();