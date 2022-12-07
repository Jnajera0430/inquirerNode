const inquirer = require('inquirer');
require('colors');


const preguntas = [{
    type:'list',
    name:'opcion',
    message:'Que desea hacer?',
    choices: [
        {
            value:'1',
            name: `${'1.'.green}Crear lista`
        },
        {
            value:'2',
            name: `${'2.'.green}Listar tareas`
        },
        {
            value:'3',
            name: `${'3.'.green}Listar tareas completadas`
        },
        {
            value:'4',
            name: `${'4.'.green}Listar tareas pendientes`
        },
        {
            value:'5',
            name: `${'5.'.green}Completar tarea(s)`
        },
        {
            value:'6',
            name: `${'6.'.green}Borrar tarea`
        },
        {
            value:'0',
            name: `${'7.'.green}Salir`
        },
        
    ]
}]


const inquirerMenu = async()=>{
    console.clear()
    console.log("===============================".green);
    console.log("      Menu de opciones    ".gray);
    console.log("===============================\n".green);

    const {opcion}= await inquirer.prompt(preguntas);
    return opcion; 
}

const pausa= async()=>{
    const question = [{
        type:'input',
        name:'enter',
        message:`Presione ${'enter'.green} si desea continuar `
    }]

    await inquirer.prompt(question)
}

const leerInput =async (message)=>{
    const question = [
        {
            type:'input',
            name:'desc',
            message,
            validate(value){
                if (value.length===0) {
                    return 'Por favor ingrese un valor';
                }
                return true
            }
        }
    ]

    const {desc} = await inquirer.prompt(question);
    return desc;
}

const listaTareaOption = async(arrList)=>{
    const arrOption =[];
    arrList.forEach(value=>{
        if (value.completado === "false") {           
            arrOption.push({
                value: value.id,
                name: value.desc, 
            })
            return
        }
        return
    })
    const listOption ={
        type:'checkbox',
        name:'tareas',
        message:'Escoja las tareas que quiera cambiar de estado...',
        choices: arrOption
    }
    const {tareas}=await inquirer.prompt(listOption).then(answers=>{
        return answers;   
    })
    return tareas;
}

const listaOptionBorrar =async(arrList)=>{
    const arrOption =[];
    
    arrList.forEach(value=>{        
            arrOption.push({
                value: value.id,
                name: value.desc, 
            })         
        return
    })
    const listOption ={
        type:'checkbox',
        name:'tareas',
        message:'Escoja las tareas que quiera cambiar de estado...',
        choices: arrOption
    }
    const {tareas}=await inquirer.prompt(listOption).then(answers=>{
        return answers;   
    })
    return tareas;
}

module.exports={
    inquirerMenu,
    pausa,
    leerInput,
    listaTareaOption,
    listaOptionBorrar
}