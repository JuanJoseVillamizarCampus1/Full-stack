import {
    obtainCategories

} from "./API.js";

document.addEventListener("DOMContentLoaded", () => {
 listarCategorias();
});

/* LISTAR CATEGORIAS  - CRUD (R) */

async function listarCategorias() {
    const categorias= await obtainCategories();
    const tablaCategorias =document.querySelector('#categories');
    categorias.forEach(categoria => {
        const {CategoriaID ,CategoriaNombre ,Descripcion, Imagen}=categoria
        tablaCategorias.innerHTML+=`
        <tr>
        <th scope="row">${CategoriaID}</th>
        <td>${CategoriaNombre}</td>
        <td>${Descripcion}</td>
        <td>${Imagen}</td>
        
        <td><button id="${CategoriaID}" class="btn btn-danger delete">Eliminar</button></td>
      </tr>`
    });
}

/* INGRESAR NUEVA CATEGORIA  - CRUD (C) */



/* ELIMINAR CATEGORIA  - CRUD (D) */



//EDITAR CATEGORIA - CRUD (U)


