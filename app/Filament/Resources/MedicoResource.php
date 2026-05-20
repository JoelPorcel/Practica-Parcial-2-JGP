<?php

namespace App\Filament\Resources;

use App\Filament\Resources\MedicoResource\Pages;
use App\Filament\Resources\MedicoResource\RelationManagers;
use App\Models\Medico;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class MedicoResource extends Resource
{
    protected static ?string $model = Medico::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form->schema([
            Forms\Components\TextInput::make('nombre_completo')->required(),
            Forms\Components\Select::make('especialidad_id')
                ->relationship('especialidad', 'nombre')
                ->required(),
            Forms\Components\TextInput::make('telefono')->tel()->required(),
            Forms\Components\TextInput::make('email')->email()->required(),
            Forms\Components\Select::make('estado')
                ->options(['activo' => 'Activo', 'inactivo' => 'Inactivo'])
                ->default('activo'),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table->columns([
            Tables\Columns\TextColumn::make('nombre_completo')->searchable(),
            Tables\Columns\TextColumn::make('especialidad.nombre'),
            Tables\Columns\TextColumn::make('email'),
            Tables\Columns\TextColumn::make('estado'),
        ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMedicos::route('/'),
            'create' => Pages\CreateMedico::route('/create'),
            'edit' => Pages\EditMedico::route('/{record}/edit'),
        ];
    }
}
