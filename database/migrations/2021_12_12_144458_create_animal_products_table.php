<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnimalProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('animal_products', function (Blueprint $table) {
            $table->string("farmID")->primary()->unique();

            $table->integer("deshi_egg_healthy")->nullable();
            $table->integer("deshi_egg_spoiled")->nullable();

            $table->integer("broiler_egg_healthy")->nullable();
            $table->integer("broiler_egg_spoiled")->nullable();

            $table->integer("duck_egg_healthy")->nullable();
            $table->integer("duck_egg_spoiled")->nullable();
            
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
        Schema::dropIfExists('animal_products');
    }
}
