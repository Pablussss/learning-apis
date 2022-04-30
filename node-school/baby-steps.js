let resultado = 0;

for (let i = 2; i < process.argv.length; i++) {
    resultado += Number(process.argv[i]);
}

console.log(resultado);