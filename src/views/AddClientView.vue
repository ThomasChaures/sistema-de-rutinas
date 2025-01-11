<script>
import { crearCliente } from "@/service/cliente";

export default {
  name: "AddClientView",
  data() {
    return {
      cliente: {
        nombre: "",
        apellido: "",
        dni: 0,
        edad: 0,
        altura: "",
        peso: 0,
      },
    };
  },
  methods: {
    async agregarCliente() {
      try {
        await crearCliente(this.cliente);
        alert("Cliente agregado correctamente");
        // Limpia el formulario después de agregar
        this.cliente = {
          nombre: "",
          apellido: "",
          dni: 0,
          edad: 0,
          altura: "",
          peso: 0,
        };
      } catch (error) {
        console.error("Error al agregar cliente:", error);
        alert("Ocurrió un error al intentar agregar el cliente.");
      }
    },
  },
};
</script>

<template>
  <h1>Agregar Cliente</h1>
  <section>
    <form @submit.prevent="agregarCliente">
      <label for="nombre">Nombre</label>
      <input
        v-model="cliente.nombre"
        type="text"
        name="nombre"
        id="nombre"
        required
      />

      <label for="apellido">Apellido</label>
      <input
        v-model="cliente.apellido"
        type="text"
        name="apellido"
        id="apellido"
        required
      />

      <label for="dni">DNI</label>
      <input
        v-model.number="cliente.dni"
        type="number"
        name="dni"
        id="dni"
        required
      />

      <label for="edad">Edad</label>
      <input
        v-model.number="cliente.edad"
        type="number"
        name="edad"
        id="edad"
        required
      />

      <label for="altura">Altura</label>
      <input
        v-model="cliente.altura"
        type="text"
        name="altura"
        id="altura"
        required
      />

      <label for="peso">Peso</label>
      <input
        v-model.number="cliente.peso"
        type="number"
        name="peso"
        id="peso"
        required
      />

      <button type="submit">Agregar Cliente</button>
    </form>
  </section>
</template>
