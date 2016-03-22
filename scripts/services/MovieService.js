angular.module("moviedb").service("MovieService", ["$q", "$timeout", function($q, $timeout) {
    var movies = [];

    this.getMovies = function() {
        // Creamos el objeto diferido

        var deferred = $q.defer();

        // Asincronía
        $timeout(function() {
            if (Math.round(Math.random() * 10) % 2 == 0) {
                // Resolvemos la promesa
                deferred.resolve(movies);
            } else {
                // Rechazamos la promesa
                deferred.reject({ error: "Forbidden" });
            }

        }, 500);

        //Devolvemos la promesa del objeto diferido
        return deferred.promise;

    }
}]);