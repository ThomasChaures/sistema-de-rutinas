<script>
import { obtenerClientes } from '@/service/cliente';

export default {
  name: 'ListaDeClientes',
  data() {
    return {
      clientes: [],
    };
  },
  async mounted() {
    try {
      this.clientes = await obtenerClientes();
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  },
};
</script>

<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>DNI</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.dni }}</td>
          <td>{{ cliente.rutina }}</td>
          <td>
            <button @click="editarCliente(cliente)">Editar</button>
            <button @click="eliminarCliente(cliente.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
