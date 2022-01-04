<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\crudController;
use App\Http\Controllers\testController;
use App\Http\Controllers\authController;
use App\Http\Controllers\ceoController;
use App\Http\Controllers\managerController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/signin', function () {
    return view('welcome');
})->middleware('signIn');


//CEO
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', 'ceo|ceo/settings|ceo/messages')->middleware('isCEOLogged');


//Manager
Route::get('/manager', function () {
    return view('welcome');
})->middleware('isManagerLogged');


Route::get('/manager/settings', function () {
    return view('welcome');
})->middleware('isManagerLogged');


//Manager
// Route::get( '/{path?}', function(){
//     return view( 'welcome' );
// } )->where('path', 'manager|manager/settings')->middleware('ismanagerLogged');




Route::resource('/register', crudController::class);

Route::post('/signin', [authController::class, 'signIn']);
Route::post('/auth', [authController::class, 'auth']);
Route::post('/testPost', [testController::class, 'testStore']);


Route::get('/users', [testController::class, 'testGet']);


Route::resource('/register', crudController::class);

Route::post('/signin', [authController::class, 'signIn']);
Route::get('/signout', [authController::class, 'signOut'])->middleware('signOut');



//CEO Routes
Route::get('/CEO_getName', [ceoController::class, 'getCEOName']);
Route::get('/CEO_getFeaturesValues', [ceoController::class, 'getFeaturesValues']);
Route::get('/CEO_getProductionFeaturesValues', [ceoController::class, 'getProductionFeaturesValues']);
Route::get('/CEO_loadProductionBarChart', [ceoController::class, 'loadProductionBarChart']);
Route::get('/CEO_getTotalBudget', [ceoController::class, 'getTotalBudget']);
Route::get('/CEO_getAnimalPrice', [ceoController::class, 'getAnimalPrice']);
Route::get('/CEO_loadManager', [ceoController::class, 'loadManager']);
Route::get('/CEO_loadFarms', [ceoController::class, 'loadFarms']);
Route::get('/CEO_getAvailableFarms', [ceoController::class, 'getAvailableFarms']);
Route::get('/CEO_getOrders', [ceoController::class, 'getOrders']);
Route::get('/CEO_getAllManagerNames', [ceoController::class, 'getAllManagerNames']);

Route::post('/CEO_loadAnalytics', [ceoController::class, 'loadAnalytics']);
Route::post('/CEO_loadProductionLineChart', [ceoController::class, 'loadProductionLineChart']);
Route::post('/CEO_createManager', [ceoController::class, 'createManager']);
Route::post('/CEO_changeManagerStatus', [ceoController::class, 'changeManagerStatus']);
Route::post('/CEO_incrementManagerSalary', [ceoController::class, 'incrementManagerSalary']);
Route::post('/CEO_createFarm', [ceoController::class, 'createFarm']);
Route::post('/CEO_changeFarmStatus', [ceoController::class, 'changeFarmStatus']);
Route::post('/CEO_loadFarmers', [ceoController::class, 'loadFarmers']);
Route::post('/CEO_validateFarmID', [ceoController::class, 'validateFarmID']);
Route::post('/CEO_validateManagerID', [ceoController::class, 'validateManagerID']);
Route::post('/CEO_getOrderDetails', [ceoController::class, 'getOrderDetails']);
Route::post('/CEO_changeAnimalPrice', [ceoController::class, 'changeAnimalPrice']);
Route::post('/CEO_setFarmCostValue', [ceoController::class, 'setFarmCostValue']);




//Manager Routes
Route::get('/MANAGER_getFarmSpace', [managerController::class, 'getFarmSpace']);
Route::get('/MANAGER_getChickenInfo', [managerController::class, 'getChickenInfo']);
Route::get('/MANAGER_getAnimalProducts', [managerController::class, 'getAnimalProducts']);
Route::get('/MANAGER_getOrderInfo', [managerController::class, 'getOrderInfo']);
Route::get('/MANAGER_getFarmers', [managerController::class, 'getFarmers']);
Route::get('/MANAGER_getFarm_n_manager_ID', [managerController::class, 'getFarm_n_manager_ID']);
Route::get('/MANAGER_getConversationsAll', [managerController::class, 'getConversationsAll']);
Route::get('/MANAGER_getManagersAll', [managerController::class, 'getManagersAll']);


Route::post('/MANAGER_updateAnimals', [managerController::class, 'updateAnimals']);
Route::post('/MANAGER_updateDucks', [managerController::class, 'updateDucks']);
Route::post('/MANAGER_updateEggs', [managerController::class, 'updateEggs']);
Route::post('/MANAGER_takeFarmerAttendance', [managerController::class, 'takeFarmerAttendance']);
Route::post('/MANAGER_getFarmerDetails', [managerController::class, 'getFarmerDetails']);
Route::post('/MANAGER_incrementFarmerSalary', [managerController::class, 'incrementFarmerSalary']);
Route::post('/MANAGER_validateFarmerID', [managerController::class, 'validateFarmerID']);
Route::post('/MANAGER_validateFarmerAge', [managerController::class, 'validateFarmerAge']);
Route::post('/MANAGER_createFarmer', [managerController::class, 'createFarmer']);
