angular.module("moviedb").controller("MovieDetailController", 
	["$scope", "$routeParams","$location", "MovieService", "paths", function($scope, $routeParams,$location,MovieService, paths) {

    // Scope init
    $scope.model = {};
    $scope.uiState = 'loading';

    //Controller init
    MovieService.getMovie($routeParams.id).then(
        //Película  encontrada
        function(movie) {
            $scope.model = movie;
            $scope.uiState = 'ideal';
        },
        //Película no encontrada
        function(error) {
        	$location.url(paths.notFound);
        }
    )

}]);