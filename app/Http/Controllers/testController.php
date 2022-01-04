<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class testController extends Controller
{
    //
    public function testStore(Request $request)
    {
    //     $user = DB::table('ceos')
    //         ->where('id', $request->id)
    //         ->where('password', $request->password)
    //         ->get();

        // if(count($user) > 0){
        //     return response()->json(
        //         ['user' =>  $user]
        //     );
        // }
        // else{
        //     return response()->json(
        //         ['user' =>  null]
        //     );
        // }
        $res = ['id' => $request->id, 'name' => $request->fName . $request->lName, 'dOB' => $request->dOB,
                'gender' => $request->gender, 'farmID' => $request->farmID, 'status' => $request->status,
                'salary' => $request->salary];

        return response()->json(
            ['id' => $request->id, 'name' => $request->fName . $request->lName, 'dOB' => $request->dOB,
            'gender' => $request->gender, 'farmID' => $request->farmID, 'status' => $request->status,
            'salary' => $request->salary]
        );
    }


    public function testGet()
    {
        $user = User::all();

        return response()->json(
            ['user' => $user]
        );
    }
}
