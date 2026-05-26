const JSON_HEADERS = {
  'Content-Type': 'application/json'
}

const authHeaders = (token) => ({
  Authorization: `Bearer ${token}`
})

export const login = async (credentials) => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: JSON_HEADERS,
    body: JSON.stringify(credentials)
  })

  if (!response.ok) {
    throw new Error('Credenciales incorrectas')
  }

  return response.json()
}

export const getMedicos = async (token) => {
  const response = await fetch('/api/medicos', {
    headers: authHeaders(token)
  })

  if (!response.ok) {
    throw new Error('No se pudieron cargar los médicos')
  }

  return response.json()
}

export const getCitas = async (token) => {
  const response = await fetch('/api/citas', {
    headers: authHeaders(token)
  })

  if (!response.ok) {
    throw new Error('No se pudieron cargar las citas')
  }

  return response.json()
}

export const createCita = async (token, data) => {
  const response = await fetch('/api/citas', {
    method: 'POST',
    headers: {
      ...JSON_HEADERS,
      ...authHeaders(token)
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error('No se pudo crear la cita')
  }

  return response.json()
}