<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCeosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ceos', function (Blueprint $table) {
            // $table->id();
            $table->string('id')->unique()->primary();
            $table->string('password');
            $table->string('name');
            $table->date('dOB');
            $table->char('gender');
            $table->double('salary');
        });
    }

    /**
     * Reverse the migrations.
     * 
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ceos');
    }
}
