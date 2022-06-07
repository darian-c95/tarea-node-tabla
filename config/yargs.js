const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean', 
        default: false,
        describe: 'Muestra la tabla de multiplicar en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number', 
        degfault: 10,
        describe: 'Indica el numero hasta donde la tabla debe mostrarse'
    })
    .check((argv, options) => {
        if(isNaN(argv.b)) {
            throw 'La base tiene que ser un numero';
        }
        return true; 
    })
    .argv;

module.exports = argv;