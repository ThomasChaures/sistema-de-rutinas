<script>
import { obtenerClientes } from '@/service/cliente';

export default {
  name: 'ListaDeClientes',
  data() {
    return {
      clientes: [],
      filtro: '', // Campo para el texto del filtro
    };
  },
  async mounted() {
    try {
      this.clientes = await obtenerClientes();
    } catch (error) {
      console.error('Error al obtener clientes:', error);
    }
  },
  computed: {
    clientesFiltrados() {
      const filtroTexto = this.filtro.toLowerCase();
      return this.clientes.filter(cliente =>
        cliente.nombre.toLowerCase().includes(filtroTexto) ||
        cliente.apellido.toLowerCase().includes(filtroTexto) ||
        cliente.dni.toString().includes(filtroTexto)
      );
    },
  },
  methods: {
    editarCliente(cliente) {
      console.log('Editar cliente:', cliente);
      
    },
    eliminarCliente(id) {
      console.log('Eliminar cliente con ID:', id);
      
    },
  },
};
</script>

<template>
  <section>
    <input
      v-model="filtro"
      type="text"
      placeholder="Buscar por nombre, apellido o DNI"
    />
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DNI</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientesFiltrados" :key="index">
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellido }}</td>
          <td>{{ cliente.dni }}</td>
          <td>
            <button @click="editarCliente(cliente)">Editar</button>
            <button @click="eliminarCliente(cliente.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
