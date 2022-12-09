require('colors')
const fs = require('fs');
const { guardar } = require('./helpers/guardar');
const { inquirerMenu, pausa,leerInput,listaTareaOption,listaOptionBorrar } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');


const main = async()=>{
    console.clear();
    let respueta = '';
    const tareas = new Tareas();
    
    
    do {
        respueta = await inquirerMenu() 
        console.log({respueta});
        /* const tarea = new Tarea('comprar comida')
        console.log(tarea); */

        switch (respueta) {
            case '1':
                const desc = await leerInput('descripcion: ');
                console.log(desc);
                //Se crea lista
                const archivoCrear ='./db/data.json'
                const arrdbCrear = JSON.parse(fs.readFileSync(archivoCrear,'utf-8'));
                let task = tareas.crearTarea(desc)
                arrdbCrear.push(task)
                guardar(arrdbCrear)
                break;
        
            case '2':
                //Se muestra la lista
                const archivoMostrar ='./db/data.json'
                const arrdbMostrar = fs.readFileSync(archivoMostrar,'utf-8');
                console.log(JSON.parse(arrdbMostrar));
                /* console.log(tareas.listadoArr); */
                break
                
            case '3':
                const archivoCompletado ='./db/data.json'
                const arrnewCompletado = fs.readFileSync(archivoCompletado,'utf-8');
                JSON.parse(arrnewCompletado).forEach(value=>{
                    let validate = value.completado;
                    if (validate==='true') {
                       console.log(value); 
                    }
                })
                
                break
            case '4':
                const archivoPendiente ='./db/data.json'
                const arrnewPendiente = fs.readFileSync(archivoPendiente,'utf-8');
                JSON.parse(arrnewPendiente).forEach(value=>{
                    let validate = value.completado;
                    if (validate === 'false') {   
                       console.log(value); 
                    }
                });
                break
            case '5':
                const archivoUpDate ='./db/data.json'
                const arrnewUpDate = fs.readFileSync(archivoUpDate,'utf-8');
                let resOpcion = await listaTareaOption(JSON.parse(arrnewUpDate));
                tareas.upDateTarea(resOpcion);
                break
            case '6':
                const archivoDelete ='./db/data.json'
                const arrnewDelete = JSON.parse(fs.readFileSync(archivoDelete,'utf-8'));
                let resOpcionBorrar = await listaOptionBorrar(arrnewDelete);
                for (let index = 0; index < resOpcionBorrar.length; index++) {
                    const element = resOpcionBorrar[index];
                    const arrFinal= await tareas.deleteTarea(element,arrnewDelete);
                     
                    guardar(arrFinal);                   
                }                
                break
            case '7':
                break
        }

        
       if(respueta !== '0') await pausa();
    } while (respueta !== '0');
}

main()