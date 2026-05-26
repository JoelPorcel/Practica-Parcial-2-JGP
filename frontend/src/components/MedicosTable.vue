<script setup>
defineProps({
  medicos: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section>
    <h2 class="mb-4 text-2xl font-bold text-gray-800">Lista de médicos</h2>

    <div class="overflow-hidden rounded-2xl bg-white shadow">
      <table class="w-full border-collapse text-left">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="border-b px-4 py-3">ID</th>
            <th class="border-b px-4 py-3">Nombre</th>
            <th class="border-b px-4 py-3">Especialidad ID</th>
            <th class="border-b px-4 py-3">Teléfono</th>
            <th class="border-b px-4 py-3">Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="medico in medicos" :key="medico.id" class="border-b last:border-b-0 hover:bg-gray-50">
            <td class="px-4 py-3">{{ medico.id }}</td>
            <td class="px-4 py-3 font-medium">{{ medico.nombre_completo }}</td>
            <td class="px-4 py-3">{{ medico.especialidad_id }}</td>
            <td class="px-4 py-3">{{ medico.telefono }}</td>
            <td class="px-4 py-3">
              <span
                class="rounded-full px-2 py-1 text-xs font-semibold"
                :class="medico.estado === 'activo' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
              >
                {{ medico.estado }}
              </span>
            </td>
          </tr>

          <tr v-if="medicos.length === 0">
            <td colspan="5" class="px-4 py-6 text-center text-gray-500">No hay médicos registrados.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>