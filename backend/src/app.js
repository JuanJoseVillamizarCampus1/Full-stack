//Importando Express
import express from "express";
//Importando enrutador
import CategoriaRoutes from "./routes/categorias.routes.js"
//Constante app que guarda a express
import cors from "cors"
const app = express();
//middleware 
app.use(express.json());
app.use(cors());

//Estableciendo el puerto
app.set("port",5004);

app.use("/api/categorias",CategoriaRoutes);


//EXportando express
export default app;