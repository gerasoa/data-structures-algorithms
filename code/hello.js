const nemo = ['nemo'];
const startTime = performance.now();

function findNemo(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Agora com o Node 20 no sublime text...');
        }
    }
}
const endTime = performance.now();

const elapsedTime = endTime - startTime;

console.log(`O loop levou ${elapsedTime} milissegundos para ser concluído.`);
findNemo(nemo);