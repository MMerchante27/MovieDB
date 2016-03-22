angular.module("moviedb").controller("AppController",
	["$scope", "$location", function($scope, $location) {
		var controller = this;
		//Controller properties
		controller.titles = {
			"/movies": "Movies List",
			"/series": "Series List",
			"/people": "People List"
		};

		// Model init
		$scope.model= { //Representación modelo
			title:""
		};

		//Scope event listeners
		$scope.$on("$locationChangeSuccess",function(evt, currentRoute){ //.$on capturar evento 
			$scope.model.title = controller.titles[$location.path()] || "404 Not Found";
		});
	}]
);