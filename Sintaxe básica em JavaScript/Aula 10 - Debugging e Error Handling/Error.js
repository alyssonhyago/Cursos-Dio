// Tratamento de Error

function validaArray(arr,num){
    try{
    if (!arr && !num) 
        throw new ReferenceError('Envie os parâmentros');

    if (typeof arr !== 'object') 
        throw new TypeError('Array precisa ser do tipo object');

    if (typeof num !== 'number') 
        throw new TypeError('Array precisa ser do tipo numero');

    if (arr.length !== num) throw new RangeError('Tamanho inválido');

    return arr;
    }
    catch (e) {

        if (e instanceof ReferenceError){
            console.log('Este error é um referenceError');
            console.log(e.message);
        }
        else if (e instanceof TypeError){
            console.log('Este error é um typeError');
            console.log(e.message);
        }
        else if (e instanceof RangeError){
            console.log('Este error é um RangeError');
            console.log(e.message);
        }
        else {
            console.log('Tipo de eeror não esperado:' + e);
        }
    }
}


console.log(validaArray([1,2,3,4,5], 5));
