const { guardar } = require("../helpers/guardar");
const { Tarea } = require("./tarea");

class Tareas {
    _listado={};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key=>{
            const tarea = this._listado[key];
            listado.push(tarea)
        })
        return listado
    }
    

    constructor(){
        this._listado={};
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea; 
    }

    upDateTarea(arrOption){
        arrOption.forEach(value=>{
            this.listadoArr.forEach(tarea=>{
                if (value === tarea.id) {
                    tarea.completado = "true";
                }
            })
            guardar(this.listadoArr)
        })
    }

    deleteTarea(arrOption,arrDb){
        console.log(arrDb);
        const arr = arrOption.map(tarea=>{
            return arrDb.filter(value=>value.id !== tarea)
        })
        return arr[0];     
    }
}

module.exports = Tareas;
