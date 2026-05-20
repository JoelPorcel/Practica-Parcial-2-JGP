<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class EspecialidadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $especialidades = [
            ['nombre' => 'Pediatria', 'descripcion' => 'Atención médica a niños.'],
            ['nombre' => 'Cardiologia', 'descripcion' => 'Salud del corazón.'],
            ['nombre' => 'Odontologia', 'descripcion' => 'Cuidado dental.'],
            ['nombre' => 'Ginecologia', 'descripcion' => 'Salud femenina.'],
            ['nombre' => 'Medico General', 'descripcion' => 'Atención médica general.']
        ];

        foreach ($especialidades as $esp) {
            \App\Models\Especialidad::create($esp);
        }
    }
}
