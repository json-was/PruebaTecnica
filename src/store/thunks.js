import { addDoc, collection, updateDoc } from "firebase/firestore"
import { FirebaseBD } from "../firebase/config"

export const addNewObjectBD = async (data) => {
  return await addDoc(collection(FirebaseBD, 'indicadores'), {
    ...data
  }).then( async (respuesta) => {
    updateDoc(respuesta, {keyBd: respuesta.id})
  })
}