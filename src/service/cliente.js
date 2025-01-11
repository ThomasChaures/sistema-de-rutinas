import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const referencia = () => {
  const ref = collection(db, "clientes");
  return ref;
};

export const crearCliente = async (cliente) => {
  const clienteRef = referencia();
  await addDoc(clienteRef, {
    ...cliente,
    rutina: "Sin rutina",
    eliminado: false,
  });
};

export const obtenerClientes = async () => {
  try {
    const clienteRef = referencia();
    const snap = await getDocs(clienteRef);
    const clientes = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return clientes;
  } catch (error) {
    console.log(error, "No se pudo obtener los clientes.");
    throw error;
  }
};

export const editarCliente = async () => {
  try {
    const clienteRef = referencia();
    const q = query(clienteRef, where("dni", "==", dni));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const docRef = snap.docs[0].ref;
      return await updateDoc(docRef, {nombre, apellido, rutina, peso, altura, edad });
    } else {
      throw new Error("No se encontró el cliente con ese DNI.");
    }
  } catch (error) {
    console.log(error, "No se pudo realizar la accion.");
    throw error;
  }
};

export const eliminadoLogicoDeCliente = async (dni) => {
  try {
    const clienteRef = referencia();
    const q = query(clienteRef, where("dni", "==", dni));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const docRef = snap.docs[0].ref;
      return await updateDoc(docRef, { eliminado: true });
    } else {
      throw new Error("No se encontró el cliente con ese DNI.");
    }
  } catch (error) {
    console.log(error, "No se pudo realizar la accion.");
    throw error;
  }
};
