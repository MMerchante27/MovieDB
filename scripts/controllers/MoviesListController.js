angular.module("moviedb").controller("MoviesListController", ["$scope", "$log", "APIClient","URL","paths",
 function($scope, $log, APIClient, URL, paths) {

    // Scope init
    $scope.model = [];

    $scope.uiState = 'loading';
    $scope.url = URL.resolve;

    //Scope methods
    $scope.getMovieDetailURL = function(movie){
        return URL.resolve(paths.movieDetail, {id:movie.id});
    }
    //Controller start

    APIClient.getMovies().then(
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