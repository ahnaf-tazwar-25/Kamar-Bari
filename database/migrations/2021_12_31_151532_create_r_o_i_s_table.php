<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateROISTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('r_o_i_s', function (Blueprint $table) {
            $table->id();
            $table->string("month");
            $table->string("year");
            $table->string("farmID");
            $table->float("cost");
            $table->float("sales");
            $table->float("revenue");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('r_o_i_s');
    }
}
