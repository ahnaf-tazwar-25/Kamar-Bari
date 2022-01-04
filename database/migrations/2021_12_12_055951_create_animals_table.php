<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animals', function (Blueprint $table) {
            $table->string("farmID")->primary()->unique();
            $table->integer("broiler_chicken_healthy")->nullable();
            $table->integer("broiler_chicken_quarantined")->nullable();
            $table->integer("broiler_chicken_dead")->nullable();

            $table->integer("deshi_chicken_healthy")->nullable();
            $table->integer("deshi_chicken_quarantined")->nullable();
            $table->integer("deshi_chicken_dead")->nullable();

            $table->integer("duck_healthy")->nullable();
            $table->integer("duck_quarantined")->nullable();
            $table->integer("duck_dead")->nullable();
            
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
        Schema::dropIfExists('animals');
    }
}
