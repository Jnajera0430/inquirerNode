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
        return tarea
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

    deleteTarea(idOption,arrDb){
        const index = arrDb.findIndex(value=>value.id === idOption); 
        arrDb.splice(index,1);         
        return arrDb;     
    }
}

module.exports = Tareas;
