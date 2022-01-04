<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Manager;
use App\Models\Farmer;
use App\Models\Farm;
use App\Models\Order;
use App\Models\AnimalPrice;

class ceoController extends Controller
{
    public function getCEOName()
    {
        $user = DB::table('ceos')
            ->where('id', "1731462")
            ->get();

        return response()->json(
            ['user' =>  $user[0]->name]
        );
        // return $user[0]->name;
    }


    public function getTotalBudget()
    {
        // $totalRevenue = DB::table('farms')
        //     ->select()
        //     ->sum('revenue');
        $totalCosts = DB::table('farms')
            ->select()
            ->sum('cost');
        $totalSales = DB::table('farms')
            ->select()
            ->sum('sales');

        $totalRevenue = $totalSales - $totalCosts;

        return response()->json(
            [
                'totalRevenue' =>  $totalRevenue, 'totalCosts' =>  $totalCosts,
                'totalSales' =>  $totalSales
            ]
        );
        // return $user[0]->name;
    }


    public function getAnimalPrice()
    {
        $animalPrices = AnimalPrice::all();

        return response()->json(
            ['animalPrices' =>  $animalPrices]
        );
    }


    public function changeAnimalPrice(Request $request)
    {
        DB::table('animal_prices')
            ->where('name', $request->name)
            ->update(['price' => $request->new_price]);

        return response()->json(
            ['price' =>  $request->new_price]
        );
    }

    public function loadManager()
    {
        $user = Manager::all();

        return response()->json(
            ['user' =>  $user]
        );
    }


    public function loadFarmers(Request $request)
    {
        // $farmers = Farmer::all();

        $farmers = DB::table('farmers')
            ->where('farmID', $request->farm_id)
            ->get();

        return response()->json(
            ['farmers' =>  $farmers]
            // ['id' => $request->farm_id]
        );
    }


    public function loadFarms()
    {
        $farms = Farm::all();

        return response()->json(
            ['farms' =>  $farms]
        );
    }


    public function getAvailableFarms()
    {
        $farms = DB::table('farms')
            ->where('managerID', null)
            ->get();

        return response()->json(
            ['farms' =>  $farms]
        );
    }

    public function getAllManagerNames()
    {
        $managers = DB::table('managers')
            ->get('name');

        return response()->json(
            ['managers' =>  $managers]
        );
    }


    public function getOrders()
    {
        $orders = Order::all();

        return response()->json(
            ['orders' =>  $orders]
        );
    }


    public function getOrderDetails(Request $request)
    {
        $orderDetials = DB::table('orders')
            ->where('id', $request->oderID)
            ->get()->first();

        $farm =  DB::table('farms')
            ->where('id', $orderDetials->farmID)
            ->get()->first();

        $farmDetails = [
            "farmID" => $farm->id, 'farmName' => $farm->name,
            'farmLocation' => $farm->address
        ];


        $manager =  DB::table('managers')
            ->where('id', $farm->managerID)
            ->get()->first();

        $managerDetails = ["managerID" => $manager->id, 'managerName' => $manager->name];


        return response()->json(
            [
                'orderDetials' =>  $orderDetials, 'farmDetails' =>  $farmDetails,
                'managerDetails' =>  $managerDetails
            ]
        );
    }



    public function validateFarmID(Request $request)
    {
        $user = DB::table('farms')
            ->where('id', $request->id)
            ->get();

        if (count($user) > 0) {
            return response()->json(
                ['farmValidateError' =>  true]
            );
        } else {
            return response()->json(
                ['farmValidateError' =>  false]
            );
        }
    }


    public function validateManagerID(Request $request)
    {
        $user = DB::table('managers')
            ->where('id', $request->id)
            ->get();

        $user2 = DB::table('ceos')
            ->where('id', $request->id)
            ->get();

        if (count($user) > 0 || count($user2) > 0) {
            return response()->json(
                ['managerValidateError' =>  true]
            );
        } else {
            return response()->json(
                ['managerValidateError' =>  false]
            );
        }
    }



    public function createManager(Request $request)
    {


        DB::table('managers')->insert([
            'id' => $request->id,
            'name' => $request->fName . " " . $request->lName,
            'farmID' => $request->farmID,
            'password' => $request->password,
            'dOB' => $request->dOB,
            'gender' => $request->gender,
            'salary' => $request->salary,
            'status' => $request->status,
        ]);

        DB::table('farms')
            ->where('id', $request->farmID)
            ->update(['managerID' => $request->id]);
    }



    public function createFarm(Request $request)
    {
        $user = DB::table('farms')
            ->where('id', $request->id)
            ->get();

        if (count($user) > 0) {
            return response()->json(
                ['farmValidateError' =>  true]
            );
        } else {
            DB::table('farms')->insert([
                'id' => $request->id,
                'name' => $request->name,
                'type' => $request->type,
                'area' => $request->area,
                'address' => $request->address,
                'managerID' => null,
                'totalFarmers' => null,
            ]);
            return response()->json(
                ['farmValidateError' =>  false]
            );
        }
    }


    public function setFarmCostValue(Request $request)
    {
        $user = DB::table('farms')
            ->where('id', $request->farmID)
            ->update(['cost' => $request->cost_value]);

        return response()->json(
            ['updateCostValue' =>  $request->cost_value]
        );
    }


    public function changeManagerStatus(Request $request)
    {
        $user = DB::table('managers')
            ->where('id', $request->managerID)
            ->update(['status' => $request->stats]);

        DB::table('farms')
            ->where('managerID', $request->managerID)
            ->update(['managerID' => null]);

        return response()->json(
            ['newStatusValue' =>  $request->stats]
        );
    }
    
    
    public function changeFarmStatus(Request $request)
    {
        $user = DB::table('farms')
            ->where('id', $request->farmID)
            ->update(['status' => $request->status]);


        return response()->json(
            ['newStatusValue' =>  $request->status]
        );
    }

    public function incrementManagerSalary(Request $request)
    {
        $user = DB::table('managers')
            ->where('id', $request->managerID)
            ->update(['salary' => $request->salary]);


        return response()->json(
            ['newSalary' =>  $request->salary]
        );
    }


    public function loadAnalytics(Request $request)
    {

        $months = DB::table('r_o_i_s')
            ->distinct()->get('month');

        // DB::table('r_o_i_s')
        //     ->insert([
        //         'month' => 'Dec',
        //         'year' => '2021',
        //         'farmID' => '121234',
        //         'cost' => 4250,
        //         'sales' => 9514,
        //         'revenue' => 9514 - 4250,
        //     ]);

        $data = array();

        foreach ($months as $month) {
            $val = DB::table('r_o_i_s')
                ->where('month', $month->month)
                ->sum($request->analyticsType);
            array_push($data, ['name' => $month->month, 'BDT' =>  $val]);
        }

        return response()->json(
            ['data' =>  $data]
        );
    }

    public function getFeaturesValues(Request $request)
    {

        $currentMonth = date('M');
        $prevMonth = date('M', strtotime("last month"));

        $prevCost = DB::table('r_o_i_s')
            ->where('month', $prevMonth)
            ->sum('cost');

        $prevSales = DB::table('r_o_i_s')
            ->where('month', $prevMonth)
            ->sum('sales');

        $prevRevenue = DB::table('r_o_i_s')
            ->where('month', $prevMonth)
            ->sum('revenue');


        $currentCost = DB::table('farms')
            ->sum('cost');

        $currentSales = DB::table('farms')
            ->sum('sales');

        $currentRevenue = $currentSales - $currentCost;


        $changeInRevenue = (int) ((($currentRevenue - $prevRevenue) / abs($prevRevenue)) * 100);
        $changeInSales = (int) ((($currentSales - $prevSales) / abs($prevSales)) * 100);
        $changeInCost = (int) ((($currentCost - $prevCost) / abs($prevCost)) * 100);

        return response()->json(
            [
                'prevCost' =>  $prevCost, 'prevSales' =>  $prevSales,
                'prevRevenue' =>  $prevRevenue, 'currentCost' =>  $currentCost,
                'currentSales' =>  $currentSales, 'currentRevenue' =>  $currentRevenue,
                'changeInRevenue' =>  $changeInRevenue, 'changeInSales' =>  $changeInSales,
                'changeInCost' =>  $changeInCost
            ]
        );
    }


    public function getProductionFeaturesValues()
    {

        $currentMonth = date('M');
        $prevMonth = date('M', strtotime("last month"));

        $prev_b_c_e = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('b_c_e');

        $prev_d_c_e = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('d_c_e');

        $prev_d_e = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('d_e');

        $prev_b_c = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('b_c');

        $prev_d_c = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('d_c');

        $prev_d_d = DB::table('r_o_p_s')
            ->where('month', $prevMonth)
            ->sum('d_d');



        $current_b_c_e = DB::table('animal_products')
            ->sum('broiler_egg_healthy');

        $current_d_c_e = DB::table('animal_products')
            ->sum('deshi_egg_healthy');

        $current_d_e = DB::table('animal_products')
            ->sum('duck_egg_healthy');

        $current_b_c = DB::table('animals')
            ->sum('broiler_chicken_healthy');

        $current_d_c = DB::table('animals')
            ->sum('deshi_chicken_healthy');

        $current_d_d = DB::table('animals')
            ->sum('duck_healthy');



        $changeIn_b_c_e = (($current_b_c_e - $prev_b_c_e) / abs($prev_b_c_e)) * 100;
        $changeIn_b_c_e = number_format($changeIn_b_c_e, 2);

        $changeIn_d_c_e = (($current_d_c_e - $prev_d_c_e) / abs($prev_d_c_e)) * 100;
        $changeIn_d_c_e = number_format($changeIn_d_c_e, 2);

        $changeIn_d_e = (($current_d_e - $prev_d_e) / abs($prev_d_e)) * 100;
        $changeIn_d_e = number_format($changeIn_d_e, 2);

        $changeIn_b_c = (($current_b_c - $prev_b_c) / abs($prev_b_c)) * 100;
        $changeIn_b_c = number_format($changeIn_b_c, 2);

        $changeIn_d_c = (($current_d_c - $prev_d_c) / abs($prev_d_c)) * 100;
        $changeIn_d_c = number_format($changeIn_d_c, 2);

        $changeIn_d_d = (($current_d_d - $prev_d_d) / abs($prev_d_d)) * 100;
        $changeIn_d_d = number_format($changeIn_d_d, 2);




        // DB::table('r_o_p_s')
        //     ->insert([
        //         'month' => 'Dec',
        //         'year' => '2021',
        //         'farmID' => '121234',
        //         'b_c_e' => 884,
        //         'd_c_e' => 498,
        //         'd_e' => 321,
        //         'b_c' => 770,
        //         'd_c' => 682,
        //         'd_d' => 350,
        //         'b_c_d' => 17,
        //     ]);

        return response()->json(
            [
                'current_b_c_e' =>  $current_b_c_e, 'current_d_c_e' =>  $current_d_c_e,
                'current_d_e' =>  $current_d_e, 'current_b_c' =>  $current_b_c,
                'current_d_c' =>  $current_d_c, 'current_d_d' =>  $current_d_d,
                'changeIn_b_c_e' =>  $changeIn_b_c_e, 'changeIn_d_c_e' =>  $changeIn_d_c_e,
                'changeIn_d_e' =>  $changeIn_d_e, 'changeIn_b_c' =>  $changeIn_b_c,
                'changeIn_d_c' =>  $changeIn_d_c, 'changeIn_d_d' =>  $changeIn_d_d,
            ]
        );
    }

    public function loadProductionLineChart(Request $request)
    {

        $months = DB::table('r_o_p_s')
            ->distinct()->get('month');

        // DB::table('r_o_i_s')
        //     ->insert([
        //         'month' => 'Dec',
        //         'year' => '2021',
        //         'farmID' => '121234',
        //         'cost' => 4250,
        //         'sales' => 9514,
        //         'revenue' => 9514 - 4250,
        //     ]);

        $data = array();

        foreach ($months as $month) {
            $val = DB::table('r_o_p_s')
                ->where('month', $month->month)
                ->sum($request->analyticsType);
            array_push($data, ['name' => $month->month, 'noOfItem' => (int) $val]);
        }

        return response()->json(
            ['data' =>  $data]
        );
    }


    public function loadProductionBarChart()
    {

        $farms = DB::table('r_o_p_s')
            ->distinct()->get('farmID');

        $data = array();

        foreach ($farms as $farm) {
            $deadChicken = DB::table('r_o_p_s')
                ->where('farmID', $farm->farmID)
                ->sum('b_c_d');

            $aliveChicken = DB::table('r_o_p_s')
                ->where('farmID', $farm->farmID)
                ->sum('b_c');

            $farmName = DB::table('farms')
                ->where('id', $farm->farmID)
                ->get()->first();

            array_push($data, ['farmName' => $farmName->name, 'Alive Chicken' => (int) $aliveChicken, 'Dead Chicken' => (int) $deadChicken]);
        }

        return response()->json(
            ['data' =>  $data]
        );
    }
}
