console.log("super_script is here!");
var myApp = angular.module( 'myApp', [] );
var data;

myApp.controller( 'superController', [ '$scope', '$http', function( $scope, $http){
  //test the input
  $scope.saveHero = function(){
    //this works!
    console.log('in saveHero' + $scope.aliasIn + $scope.superPower);
    var heroToSend={
      alias: $scope.aliasIn,
      fName: $scope.firstName,
      lName: $scope.lastName,
      city: $scope.cityIn,
      power:$scope.superPower
    }; // end heroToSend object

console.log( heroToSend);//logs out

  $http({
    method: 'POST',
    url: "/addHero",
    data: heroToSend
  }).then( function (){
    console.log('in add/hero POST');//logs out

    $scope.getHeroes();
  });//end http
};// end saveHero button click

$scope.getHeroes = function(){
  console.log('in get Heroes');//logs out

  $http({
    method:'GET',
    url: '/getHeroes'
  }).then( function( response ) {
    $scope.heroes = response.data;
    console.log('$scope.heroes: oh BOY ' + scope.heroes.alias);
  });//end http
};// end getHeroes

$scope.getHeroes();

}]);//end superController
