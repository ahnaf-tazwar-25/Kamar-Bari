<?php

namespace App\Http\Controllers;

use DateTime;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class managerController extends Controller
{
    public function getFarmSpace()
    {
        $farm = DB::table('farms')
                ->where('managerID', session("managerID"))
                ->get()->first();

        $animals = DB::table('animals')
                ->where('farmID', $farm->id)
                ->get()->first();


        $chickenArea =  (($animals->broiler_chicken_healthy) * 3) +
                        (($animals->deshi_chicken_healthy) * 3);

        $duckArea =  ($animals->duck_healthy) * 3;

        $availableArea = $farm->area - ($chickenArea + $duckArea);


        if($farm->last_attendance == date("Y-m-d")){
            $attendanceTaken = true;
        }
        else{
            $attendanceTaken = false;
        }

        return response()->json(
            ['animals' =>  $animals, 'chickenArea' =>  $chickenArea,
            'duckArea' =>  $duckArea, 'availableArea' =>  $availableArea,
            'attendanceTaken' =>  $attendanceTaken]
        );
        // return $user[0]->name;
    }


    public function getChickenInfo()
    {
        $farm = DB::table('farms')
                ->where('managerID', session("managerID"))
                ->get()->first();

        $animals = DB::table('animals')
                ->where('farmID', $farm->id)
                ->get()->first();


        return response()->json(
            ['animals' =>  $animals]
        );
        // return $user[0]->name;
    }


    public function getAnimalProducts()
    {
        $farm = DB::table('farms')
                ->where('managerID', session("managerID"))
                ->get()->first();

        $animalProducts = DB::table('animal_products')
                ->where('farmID', $farm->id)
                ->get()->first();


        return response()->json(
            ['animalProducts' =>  $animalProducts]
        );
        // return $user[0]->name;
    }


    public function updateAnimals(Request $request)
    {

       if($request->itemName === "Deshi"){
           $animalName = "deshi_chicken_";
       }
       elseif($request->itemName === "Broiler"){
            $animalName = "broiler_chicken_";
       }
       


       if($request->secondID === "healthy"){
        $animalName = $animalName . "healthy";
       }
       elseif($request->secondID === "quarantined"){
            $animalName = $animalName . "quarantined";
       }
       elseif($request->secondID === "dead"){
            $animalName = $animalName . "dead";
       }

       DB::table('animals')
            ->where('farmID', $request->id)
            ->update([$animalName => $request->animalNumber]);

            // ->increment($animalName, $request->animalNumber);


        return response()->json(
            ['animals' =>  $animalName]
        );
        // return $user[0]->name;
    }


    public function updateDucks(Request $request)
    {

       $animalColumn = $request->animalQuery;

       DB::table('animals')
            ->where('farmID', $request->id)
            ->update([$animalColumn => $request->animalNumber]);
    }



    public function updateEggs(Request $request)
    {

       if($request->eggOf === "Deshi"){
           $productName = "deshi_egg_";
       }
       elseif($request->eggOf === "Broiler"){
            $productName = "broiler_egg_";
       }
       elseif($request->eggOf === "Duck"){
            $productName = "duck_egg_";
       }


       if($request->eggCondition === "healthy"){
           $productName = $productName. "healthy";
       }
       elseif($request->eggCondition === "spoiled"){
            $productName = $productName . "spoiled";
       }
       

       DB::table('animal_products')
            ->where('farmID', $request->id)
            ->update([$productName => $request->animalNumber]);

            // ->increment($animalName, $request->animalNumber);


        return response()->json(
            ['animals' =>  $productName]
        );
        // return $user[0]->name;
    }



    public function getOrderInfo()
    {
        $farm = DB::table('farms')
                ->where('managerID', session("managerID"))
                ->get()->first();

        $orders = DB::table('orders')
                ->where('farmID', $farm->id)
                ->get();

        $differences = array();

        foreach($orders as $order){
            $from = strtotime($order->deadline);
            $today = time();
            $difference = $from - $today;
            $difference = floor($difference / 86400);
            
            array_push($differences, $difference);
        }

        


        return response()->json(
            ['orders' =>  $orders, 'difference' => $differences]
        );
        // return $user[0]->name;
    }

    public function getFarmers()
    {
        $farm = DB::table('farms')
        ->where('managerID', session("managerID"))
        ->get()->first();

        $farmers = DB::table('farmers')
                ->where('farmID', $farm->id)
                ->get();

        
        if($farm->last_attendance == date("Y-m-d")){
            $attendanceTaken = true;
        }
        else{
            $attendanceTaken = false;
        }


        return response()->json(
            ['farmers' =>  $farmers, 'attendanceTaken' =>  $attendanceTaken]
        );
        // return $user[0]->name;
    }

    public function takeFarmerAttendance(Request $request)
    {
        $farm = DB::table('farms')
        ->where('managerID', session("managerID"))
        ->get()->first();

        $farmers = DB::table('farmers')
                ->where('farmID', $farm->id)
                ->get();

        
        $isAbsent = true;

        $counter=0;

        foreach($farmers as $farmer){
            // $counter=1;
            foreach($request->totalPresent as $perPresent){
                // $counter=2;
                if($farmer->id == $perPresent){
                    $counter=3;
                    DB::table('farmers')
                        ->where('id', $perPresent)
                        ->update(['present'=> 1]);
                        // ->increment('present', 1);
                    
                    $isAbsent = false;
                    break;
                }
            }
            if($isAbsent){
                // $counter=4;
                DB::table('farmers')
                        ->where('id', $farmer->id)
                        ->update(['absent'=> 1]);
                        // ->increment('absent', 1);
            }
            $isAbsent = true;
        }
        $nowDate = date("Y/m/d");

        DB::table('farms')
        ->where('id', $farm->id)
        ->update(['last_attendance' =>  date("Y/m/d")]);

        return response()->json(
            ['totalPresent' =>  $request->totalPresent,
            'counter' =>  $counter]
        );
        // return $user[0]->name;
    }


    public function getFarmerDetails(Request $request)
    {
        $farmer = DB::table('farmers')
                ->where('id', $request->farmerID)
                ->get()->first();

        $farm = DB::table('farms')
                ->where('id', $farmer->farmID)
                ->get()->first();

        $manager = DB::table('managers')
                ->where('id', session("managerID"))
                ->get()->first();

        return response()->json(
            ['farmer' =>  $farmer, 'farm' => $farm,
            'managerName' => $manager->name, 'managerID' => session("managerID")]
        );
        // return $user[0]->name;
    }



    public function incrementFarmerSalary(Request $request)
    {
        DB::table('farmers')
            ->where('id', $request->id)
            ->update(['salary' => $request->salary]);

        return response()->json(
            ['salary' =>  $request->salary]
        );
    }

    public function validateFarmerID (Request $request)
    {
        $farmer = DB::table('farmers')
        ->where('id', $request->id)
        ->get();

        if(count($farmer) > 0){
            return response()->json(
                ['farmerValidateError' =>  true]
            );
        }
        else{
            return response()->json(
                ['farmerValidateError' =>  false]
            );
        }
    }

    public function validateFarmerAge (Request $request)
    {
        $date1 = new DateTime($request->farmerDOB);
        $date2 = new DateTime(date("Y-m-d"));
        $interval = $date1->diff($date2);

        if($interval->y >= 15){
            return false;
        }
        elseif($interval->y < 15){
            return true;
        }
    }


    public function getFarm_n_manager_ID ()
    {
        $manager = DB::table('managers')
                ->where('id', session("managerID"))
                ->get()->first();
       
        $farm = DB::table('farms')
            ->where('managerID', $manager->id)
            ->get()->first();
        

        return response()->json(
            ['farmID' =>  $farm->id, 'farmName' =>  $farm->name, 'farmLocation' =>  $farm->address,
            'managerID' =>  session("managerID"), 'managerName' =>  $manager->name]
        );
    }

    public function getManagersAll ()
    {
        $managersAll = DB::table('managers')
            ->select('id', 'name')
            ->where('id', '!=' , session("managerID"))
            ->orderBy("name")
            ->get();

        return response()->json(
            ['managersAll' => $managersAll]
        );
    }

    public function getConversationsAll ()
    {
        
        $conversationsAll = DB::table('messages')
            ->where('senderID', session("managerID"))
            ->orWhere('receiverID', session("managerID"))
            ->get();

        
        

        return response()->json(
            ['test' =>  "Working", 'conversationsAll' => $conversationsAll]
        );
    }
}



