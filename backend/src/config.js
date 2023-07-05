//Importando config dre dotenv 
import {config} from "dotenv";

//Inicializando config
config();

export default{
    host:process.env.HOST,
    database: process.env.DATABASE,
    user : process.env.USUARIO,
    password: process.env.PASSWORD
}
