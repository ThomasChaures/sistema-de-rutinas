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
  <section class="p-4">
    <input
      v-model="filtro"
      type="text"
      placeholder="Buscar por nombre, apellido o DNI"
      class="mb-4 p-2 border border-gray-300 rounded w-full"
    />
    <table class="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Nombre</th>
          <th class="py-2 px-4 border-b">Apellido</th>
          <th class="py-2 px-4 border-b">DNI</th>
          <th class="py-2 px-4 border-b">Estado</th>
          <th class="py-2 px-4 border-b">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientesFiltrados" :key="index" class="hover:bg-gray-100">
          <td class="py-2 px-4 text-center border-b">{{ cliente.nombre }}</td>
          <td class="py-2 px-4 text-center border-b">{{ cliente.apellido }}</td>
          <td class="py-2 px-4 text-center border-b">{{ cliente.dni }}</td>
          <td class="py-2 px-4 text-center border-b">{{ cliente.rutina }}</td>
          <td class="py-2 px-4 flex items-center justify-center gap-x-10 border-b">
            <router-link :to="'/'" class="bg-blue-500 text-white px-2 py-1 rounded">Editar</router-link>
            <router-link :to="'/'" class="bg-red-500 text-white px-2 py-1 rounded">Eliminar</router-link>
            <router-link v-if="cliente.rutina === 'Sin rutina'" :to="'/'" class="bg-green-500 text-white px-2 py-1 rounded">Crear Rutina</router-link>
            <router-link v-else :to="'/'" class="bg-yellow-500 text-white px-2 py-1 rounded">Editar Rutina</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
