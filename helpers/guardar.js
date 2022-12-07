const fs = require('fs');

const guardar =(data)=>{
    const archivo ='./db/data.json'
    fs.writeFileSync(archivo,JSON.stringify(data));
}


module.exports={
    guardar
}
