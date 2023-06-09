import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { FirebaseBD } from "../firebase/config";

export const addNewObjectBD = async (data) => {
  return await addDoc(collection(FirebaseBD, "indicadores"), {
    ...data,
  }).then(async (respuesta) => {
    updateDoc(respuesta, { keyBd: respuesta.id });
  });
};

export const updateObjectBD = async (data, key) => {
  const docIndicador = doc(FirebaseBD, "indicadores", key);
  return await updateDoc(docIndicador, {
    ...data,
  });
};

export const deleteObjectBD = async (key) => {
  await deleteDoc(doc(FirebaseBD, "indicadores", key));
  location.reload();
};
