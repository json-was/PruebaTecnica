import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";

export const addNewObjectBD = async (data) => {
  return await addDoc(collection(FirebaseBD, "indicado"), {
    ...data,
  }).then(async (respuesta) => {
    updateDoc(respuesta, { keyBd: respuesta.id });
  });
};

export const updateObjectBD = async (data, key) => {
  const docIndicador = doc(FirebaseBD, "indicado", key);
  return await updateDoc(docIndicador, {
    ...data,
  });
};

export const deleteObjectBD = async (key) => {
  await deleteDoc(doc(FirebaseBD, "indicado", key));
  location.reload();
};
