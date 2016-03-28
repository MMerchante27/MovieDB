angular.module("moviedb").controller("SeriesListController", ["$scope", "$log", "APIClient","URL","paths",
 function($scope, $log, APIClient, URL, paths) {

    // Scope init
    $scope.model = [];

    $scope.uiState = 'loading';
    $scope.url = URL.resolve;

    //Scope methods
    $scope.getSerieDetailURL = function(serie){
        return URL.resolve(paths.serieDetail, {id:serie.id});
    }
    //Controller start

    APIClient.getSeries().then(
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
