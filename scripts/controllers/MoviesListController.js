angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "MovieService", function($scope, $log, MovieService) {

    // Scope init
    $scope.model = [];

    $scope.uiState = 'loading';


    //Controller start

    MovieService.getMovies().then(
        // Promesa resuelta
        function(data) {
            $log.log("SUCCESS", data);
            $scope.model = data;
            if ($scope.model.length == 0) {
                $scope.uiState = 'blank';
            } else {
                $scope.uiState = "ideal";

            }
        },

        //Promesa rechazada
        function(data) {
            $log.log("ERROR", data);
            $scope.uiState = 'error';
        }
    );

}]);