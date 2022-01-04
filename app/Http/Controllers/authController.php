<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class authController extends Controller
{
    public function signIn(Request $request)
    {
        $user = DB::table('managers')
            ->where('id', $request->id)
            ->where('password', $request->password)
            ->get();

            
        

        if(count($user) > 0){
            session()->put('manager', true);
            session()->put('managerID', $request->id);
            return response()->json(
                ['user' =>  $user, 'type' => "m"]
            );
        }
        else{
            $user = DB::table('ceos')
                ->where('id', $request->id)
                ->where('password', $request->password)
                ->get();

            if(count($user) > 0){
                session()->put('ceo', true);
                return response()->json(
                    ['user' =>  $user, 'type' => "c"]
                );
            }

            else{
                return response()->json(
                   ['user' =>  null]
                );
            }
        }
    }

    public function auth(Request $request){

        if (session()->has("ceo")){
            return "ceo";
        }
        elseif (session()->has("manager")){
            return "manager";
        }
        else{
            return "disconnect";
        }
    }

    public function signOut(Request $request){

        if (session()->has("ceo")){
            session()->pull('ceo');
        }
        elseif (session()->has("manager")){
            session()->pull('manager');
        }
        else{
            session()->pull('ceo');
            session()->pull('manager');
        }
    }
}
