<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class CustomerController extends Controller
{
    public  function Registration(Request $request){
       $customer=new Customer;
        $customer->name=$request->input('name');
        $customer->email=$request->input('email');
        $customer->password=Hash::make($request->input('password'));
        $customer->save();

        return $customer;
    }
}
