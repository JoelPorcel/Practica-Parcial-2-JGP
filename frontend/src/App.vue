<script setup>
import { computed, ref, onMounted } from 'vue'
import LoginForm from './components/LoginForm.vue'
import DashboardNav from './components/DashboardNav.vue'
import MedicosTable from './components/MedicosTable.vue'
import CitasPanel from './components/CitasPanel.vue'
import { createCita, getCitas, getMedicos, login } from './services/hospitalApi'

const token = ref(localStorage.getItem('token') || '')
const view = ref('medicos')
const loginError = ref('')
const loading = ref(false)

const medicos = ref([])
const citas = ref([])

const hasToken = computed(() => Boolean(token.value))

const handleLogin = async (credentials) => {
  loginError.value = ''
  loading.value = true

  try {
    const data = await login(credentials)

    if (data.token) {
      token.value = data.token
      localStorage.setItem('token', data.token)
      view.value = 'medicos'
      await loadData()
    }
  } catch (err) {
    loginError.value = err.message
  } finally {
    loading.value = false
  }
}

const logout = () => {
  token.value = ''
  localStorage.removeItem('token')
}

const loadData = async () => {
  try {
    medicos.value = await getMedicos(token.value)
    citas.value = await getCitas(token.value)
  } catch (err) {
    console.error(err)
  }
}

const handleCreateCita = async (data) => {
  try {
    await createCita(token.value, data)
    await loadData()
  } catch (error) {
    console.error('Error al crear cita', error)
  }
}

onMounted(() => {
  if (token.value) loadData()
})
</script>

<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <LoginForm v-if="!hasToken" @submit="handleLogin" />

    <div v-else>
      <DashboardNav :view="view" @change-view="view = $event" @logout="logout" />

      <main class="mx-auto max-w-5xl p-6">
        <MedicosTable v-if="view === 'medicos'" :medicos="medicos" />
        <CitasPanel v-else :citas="citas" @create="handleCreateCita" />
      </main>
    </div>
  </div>
</template>
