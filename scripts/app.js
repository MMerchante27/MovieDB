// Defino el módulo "moviedb"
angular.module("moviedb", ["ngRoute", "ngSanitize", "URL"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {
        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.movies, {
            templateUrl: 'views/MoviesList.html'
        }).when(paths.movieDetail, {
            controller: 'MovieDetailController',
            templateUrl: 'views/MediaItemDetail.html',
        }).when(paths.series, {
            templateUrl: 'views/SeriesList.html'
        }).when(paths.serieDetail, {
            controller: 'SerieDetailController',
            templateUrl: 'views/MediaItemDetail.html'
        }).when(paths.people, {
            templateUrl: 'views/PeopleList.html'
        }).when(paths.home, {
            redirectTo: paths.movies
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);
