//Iportando a express
import app from "./app.js"

//Funcion para iniciar la app
const main = () => {
    //Inicializamos el servidor
    app.listen(app.get("port"));
    console.log(`Uwuu iniciaste ${app.get ("port")}`);
}

main();