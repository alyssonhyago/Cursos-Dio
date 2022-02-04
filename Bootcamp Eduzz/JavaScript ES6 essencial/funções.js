function fn(){
    return ' code here';
}

const arrowFn = () => 'Code here';
const arrowFn2 = () => {
    //mais de uma expressão
    return 'Code here';
}

fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);