/**
 * Created by mmartinez on 09/03/2016.
 */

var configCross = function($routeProvider){

    $routeProvider.when("/", {
        controller: "controllers/loginController",
        templateUrl: "views/login.html"
    });

}

//Se crea el módulo y se aplica la configuración
var Cross = angular.module("Cross", ["ngRoute"]).config(configAgenda);
