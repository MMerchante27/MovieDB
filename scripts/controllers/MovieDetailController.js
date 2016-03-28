angular.module("moviedb").controller("MovieDetailController", ["$scope", "$routeParams", "$location", "MovieService", "paths", function($scope, $routeParams, $location, MovieService, paths) {

    // Scope init
    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    $scope.$emit("ChangeTitle","Loading...");

    MovieService.getMovie($routeParams.id).then(
        //Película  encontrada
        function(movie) {
            $scope.model = movie;
            $scope.uiState = 'ideal';
            $scope.$emit("ChangeTitle", $scope.model.title);
        },
        //Película no encontrada
        function(error) {
            $location.url(paths.notFound);
        }
    );


}]);
