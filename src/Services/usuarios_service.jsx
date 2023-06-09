import firebase from '../Config/firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function create(payload){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(payload.correo,payload.contrasena)
    console.log("~ file: usuarios_service.jsx:5 ~ create ~ responseUser:", responseUser.user.uid)
    const document = await firebase.firestore().collection("usuarios")
    .add({
        name:payload.nombre,
        lastname:payload.apellido,
        userid:responseUser.user.uid
    })
    console.log(document)
    return document
}

export async function login(correo,contrasena){
    const responseUser = await firebase.auth().signInWithEmailAndPassword(correo,contrasena)
    return responseUser.user.uid
}