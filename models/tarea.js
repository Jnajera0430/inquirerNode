const {v4: id} = require('uuid')

class Tarea {
    id='';
    desc='';
    completado='false';

    constructor(desc){
        this.id= id();
        this.desc = desc;
        this.completado= 'false';
    }

}
module.exports={
    Tarea
}