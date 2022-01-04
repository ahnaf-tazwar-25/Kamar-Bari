<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFarmersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farmers', function (Blueprint $table) {
            // $table->id();
            $table->string('id')->unique()->primary();
            $table->string('farmID');
            $table->string('name');
            $table->string('section');
            $table->date('dOB');
            $table->char('gender');
            $table->double('salary');
            $table->integer('present')->nullable();
            $table->integer('absent')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('farmers');
    }
}
