const url = "http://localhost:5004/api/categorias/";

export const obtainCategories = async () => {
 try {
    const data = await fetch(url);
    const result = data.json();
    console.log(result);
    return result;
    
 } catch (error) {
    console.log(error);
 }
};


// export const nuevaCategoria = async (categoria) => {
  
// };


// export const deleteCategory = async (id) => {
  
// };



// export const obtenerCategory = async (id) => {
 
// };



export const editarCategory = async (category) => {
 
};





