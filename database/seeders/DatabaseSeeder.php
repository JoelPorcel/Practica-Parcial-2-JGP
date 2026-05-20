<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([EspecialidadSeeder::class,]);
        
        \App\Models\Medico::factory(10)->create();
        \App\Models\Paciente::factory(40)->create();
    }
}
