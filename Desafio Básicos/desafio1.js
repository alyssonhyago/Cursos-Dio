let lines = gets().split('\n');

const [precoAlcool, precoGasolina, rendimentoAlcool, rendimentoGasolina] = 

 lines[0].split(' ').map(x => parseFloat(x));


const precoPorKmAlcool = precoAlcool / rendimentoAlcool; // essa linha que foi alterada

const precoPorKmGasolina = precoGasolina / rendimentoGasolina; // essa aqui também foi alterada.

const maisEconomico = precoPorKmGasolina <= precoPorKmAlcool ? 'G' : 'A';

print(maisEconomico);