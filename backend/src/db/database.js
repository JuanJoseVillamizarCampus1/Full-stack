//Importando mysql 
import mysql from "promise-mysql";
//Importando el config
import config from "./../config.js";
//Constante para crear conexion con base de datos
const connection = mysql.createConnection({
    host :config.host,
    database: config.database,
    user: config.user,
    password : config.password
});

// Creando funcion para traer la conexion
const getConnection = ()=>{
    return connection;
}
//Exportando funcion de conexion
export default getConnection;