import { collection, addDoc, query, where, getDocs, updateDoc, increment } from 'firebase/firestore'
import { db } from './firebase'

export const crearCliente = (cliente) => {
  const clienteRef = collection(db, 'clientes')
}
