import firebase from '../Config/firebase';

export async function getAllProductos(){
   // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=celular").then(res=>res.json())
   return await firebase.firestore().collection("productos") // Se usa colection porque usa toda la coleccion
   .get()
}

export async function getById(id){
    // return fetch(`https://api.mercadolibre.com/items/${id}`).then(res=>res.json())
    return await firebase.firestore().doc(`productos/${id}`) // Se usa doc porque quiero ver un documento en particular
    .get() // Se usa para leer el documento
}

export async function create(payload){
    return await firebase.firestore().collection("productos")
    .add(payload)
}

export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`)
    .set(payload) // settea los nuevos datos del producto
}

export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`)
    .delete() // Elimina todo el documento
}