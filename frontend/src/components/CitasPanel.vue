<script setup>
import { reactive } from 'vue'

defineProps({
  citas: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['create'])

const nuevaCita = reactive({
  medico_id: '',
  paciente_id: '',
  fecha_cita: '',
  hora_cita: ''
})

const submit = () => {
  emit('create', {
    medico_id: nuevaCita.medico_id,
    paciente_id: nuevaCita.paciente_id,
    fecha_cita: nuevaCita.fecha_cita,
    hora_cita: nuevaCita.hora_cita
  })

  nuevaCita.medico_id = ''
  nuevaCita.paciente_id = ''
  nuevaCita.fecha_cita = ''
  nuevaCita.hora_cita = ''
}
</script>

<template>
  <section>
    <div class="mb-4 flex items-center justify-between">
      <h2 class="text-2xl font-bold text-gray-800">Reserva de citas</h2>
    </div>

    <div class="mb-6 rounded-2xl bg-white p-4 shadow">
      <h3 class="mb-3 text-lg font-bold text-gray-800">Nueva cita</h3>

      <form class="flex flex-wrap items-end gap-4" @submit.prevent="submit">
        <div>
          <label class="mb-1 block text-xs font-bold text-gray-600">Médico ID</label>
          <input v-model="nuevaCita.medico_id" type="number" class="w-24 rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label class="mb-1 block text-xs font-bold text-gray-600">Paciente ID</label>
          <input v-model="nuevaCita.paciente_id" type="number" class="w-24 rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label class="mb-1 block text-xs font-bold text-gray-600">Fecha</label>
          <input v-model="nuevaCita.fecha_cita" type="date" class="rounded-lg border px-3 py-2" />
        </div>

        <div>
          <label class="mb-1 block text-xs font-bold text-gray-600">Hora</label>
          <input v-model="nuevaCita.hora_cita" type="time" class="rounded-lg border px-3 py-2" />
        </div>

        <button type="submit" class="rounded-lg bg-green-600 px-4 py-2 font-semibold text-white hover:bg-green-700">
          Agregar
        </button>
      </form>
    </div>

    <div class="overflow-hidden rounded-2xl bg-white shadow">
      <table class="w-full border-collapse text-left">
        <thead class="bg-gray-100 text-gray-700">
          <tr>
            <th class="border-b px-4 py-3">Médico ID</th>
            <th class="border-b px-4 py-3">Paciente ID</th>
            <th class="border-b px-4 py-3">Fecha y hora</th>
            <th class="border-b px-4 py-3">Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="cita in citas" :key="cita._id || cita.id" class="border-b last:border-b-0 hover:bg-gray-50">
            <td class="px-4 py-3">{{ cita.medico_id }}</td>
            <td class="px-4 py-3">{{ cita.paciente_id }}</td>
            <td class="px-4 py-3">{{ cita.fecha_cita }} {{ cita.hora_cita }}</td>
            <td class="px-4 py-3">
              <span class="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                {{ cita.estado || 'Programada' }}
              </span>
            </td>
          </tr>

          <tr v-if="citas.length === 0">
            <td colspan="4" class="px-4 py-6 text-center text-gray-500">No hay citas registradas.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>