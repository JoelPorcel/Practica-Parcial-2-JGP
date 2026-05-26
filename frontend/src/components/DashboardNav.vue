<script setup>
defineProps({
  view: {
    type: String,
    required: true
  }
})

defineEmits(['change-view', 'logout'])
</script>

<template>
  <nav class="flex items-center justify-between bg-blue-600 px-4 py-3 text-white shadow-md">
    <h1 class="text-lg font-bold">Hospital Dashboard</h1>

    <div class="flex items-center gap-3 text-sm sm:gap-4">
      <button
        class="rounded-md px-3 py-1 transition hover:bg-blue-500/60"
        :class="view === 'medicos' ? 'bg-white/20 font-semibold' : ''"
        @click="$emit('change-view', 'medicos')"
      >
        Médicos
      </button>

      <button
        class="rounded-md px-3 py-1 transition hover:bg-blue-500/60"
        :class="view === 'citas' ? 'bg-white/20 font-semibold' : ''"
        @click="$emit('change-view', 'citas')"
      >
        Citas
      </button>

      <button
        class="rounded-md bg-red-500 px-3 py-1 font-semibold transition hover:bg-red-600"
        @click="$emit('logout')"
      >
        Salir
      </button>
    </div>
  </nav>
</template>