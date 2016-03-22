angular.module("moviedb").controller("MenuController", 	
	["$scope", "$location", function($scope, $location) {

		//Scope init
		$scope.model = {
			selectedItem:"movies"
		};

		//Scope methods
		$scope.setSelectedItem = function(item){
			$scope.model.selectedItem = item;
		};

		$scope.getClassForItem = function(item){
			if($scope.model.selectedItem == item){
				return "active";
			} else {
				return "";	
			}
		};

		//Scope Watchers

		$scope.$on("$locationChangeSuccess",function(evt, currentRoute){ //.$on capturar evento 
			$scope.model.selectedItem = $location.path();
		});

	}]
);