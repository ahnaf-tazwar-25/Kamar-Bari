<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class signOutCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(session()->has('ceo') || session()->has("manager")){
            session()->pull('ceo');
            session()->pull('manager');
            return redirect('/');
        }
        return $next($request);
    }
}
