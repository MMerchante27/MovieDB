angular.module("moviedb").service("APIClient", ["$http", "$q", "apiPaths", "URL", function($http, $q, apiPaths, URL) {
    this.apiRequest = function(url) {
        //crear objeto diferido
        var deferred = $q.defer();
        // hacer trabajo asíncrono
        $http.get(url).then(
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

    this.getMovies = function() {
        return this.apiRequest(apiPaths.movies);
    };

    this.getMovie = function(movieId) {
        var url = URL.resolve(apiPaths.movieDetail, { id: movieId });
        return this.apiRequest(url);
    };
    this.getSeries = function() {
        return this.apiRequest(apiPaths.series);
    };

    this.getSerie= function(serieId) {
        var url = URL.resolve(apiPaths.serieDetail, { id: serieId });
        return this.apiRequest(url);
    };
}]);
