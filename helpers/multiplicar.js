const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = async( base = 5, listar = false, hasta=10 ) => {

    try{

        let salida = '';

        for( let i = 1; i <= hasta; i++ ){
            console.log(`${ base } X ${ i } = ${ base * i }\n`); 
        }

               
        if( listar ){
            console.log('======================');
            console.log('   Tabla del: ', base );
            console.log('======================');
            
            console.log(salida);
        
        }
        
        fs.writeFileSync( `tabla-${ base }.txt`, salida);

        return `./salida/tabla-${ base }.txt`;
    } catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
}