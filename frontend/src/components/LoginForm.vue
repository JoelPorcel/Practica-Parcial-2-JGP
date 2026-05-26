<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const credentials = reactive({
  email: '',
  password: ''
})

const submit = () => {
  emit('submit', {
    email: credentials.email,
    password: credentials.password
  })
}
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 px-4">
    <div class="w-full max-w-sm rounded-2xl bg-white p-8 shadow-lg">
      <h2 class="mb-6 text-center text-2xl font-bold text-blue-600">Iniciar sesión</h2>

      <form class="space-y-4" @submit.prevent="submit">
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            v-model="credentials.email"
            type="email"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            v-model="credentials.password"
            type="password"
            required
            class="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
    </div>
  </div>
</template>