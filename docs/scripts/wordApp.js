var app = angular.module('myApp',  ['ngTouch']);
app.controller('myCtrl', function($scope, $http, $timeout) {
  $http.get("./data/words.json").then(function (response) {
      $scope.words = response.data;
	  $scope.showActions = false;
	  $scope.timedOut = false;
  });

  $timeout( function(){ $scope.timed(); }, 60000*5);  
   $scope.right= function(word){
		word.count=1;
		$scope.showActions = !$scope.showActions;
   };
   
   $scope.timed = function(){
     $scope.timedOut = !$scope.timedOut;
	// var audio = new Audio('http://localhost:3000/wordsApp/sounds/sound1.mp4');
     // audio.play();
   };
});
