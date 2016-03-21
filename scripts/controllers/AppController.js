angular.module("moviedb").controller("AppController",
	["$scope",function($scope) {
		// Model init
		$scope.model= { //Representación modelo
			title:""
		};

		//Scope event listeners
		$scope.$on("OnMenuChange",function(evt, data){ //.$on capturar evento OnMenuChange
			$scope.model.title = data;
		});
	}]
);