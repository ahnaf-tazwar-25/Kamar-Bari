<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFarmsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('farms', function (Blueprint $table) {
            $table->string('id')->unique()->primary();
            $table->string('name');
            $table->string('type');
            $table->string('area');
            $table->string('address');
            $table->string('managerID');
            $table->integer('totalFarmers');
            $table->date('last_attendance');
            $table->float("cost");
            $table->float("sales");
            $table->float("revenue");
            $table->date("roiDate");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('farms');
    }
}
