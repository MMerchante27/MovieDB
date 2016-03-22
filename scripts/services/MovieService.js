angular.module("moviedb").service("MovieService", ["$http", function($http) {
    this.getMovies = function() {
        return $http.get('api/movies');

    }
}]);