<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateROPSTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('r_o_p_s', function (Blueprint $table) {
            $table->id();
            $table->string("month");
            $table->string("year");
            $table->string("farmID");
            $table->integer("b_c_e");
            $table->integer("d_c_e");
            $table->integer("d_e");
            $table->integer("b_c");
            $table->integer("d_c");
            $table->integer("d_d");
            $table->integer("b_c_d");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('r_o_p_s');
    }
}
