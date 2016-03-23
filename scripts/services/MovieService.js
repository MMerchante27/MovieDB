angular.module("moviedb").service("MovieService", ["$http", "$q", function($http, $q) {

    this.getMovies = function() {

        //crear objeto diferido
        var deferred = $q.defer();
        // hacer trabajo asíncrono
        $http.get('api/movies').then(
            function(response) {
                // resolver la promesa
                deferred.resolve(response.data);

            },
            function(response) {
                // rechazar la promesa
                deferred.reject(response.data);

            }
        )

        // devolver la promesa

        return deferred.promise;

    };
}]);