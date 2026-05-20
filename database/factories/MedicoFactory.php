<?php

namespace Database\Factories;

use App\Models\Medico;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Medico>
 */
class MedicoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $especialidades = \App\Models\Especialidad::pluck('id')->toArray();
        $especialidadId = $this->faker->randomElement($especialidades);
        return [
            'nombre_completo' => $this->faker->name(),
            'especialidad_id' => $especialidadId,
            'telefono' => $this->faker->phoneNumber(),
            'email' => $this->faker->unique()->safeEmail(),
            'estado' => 'activo',
        ];
    }
}
