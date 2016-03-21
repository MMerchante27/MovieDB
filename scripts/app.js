// Defino el módulo "moviedb"
angular.module("moviedb", ['ngRoute']).config(
	["$routeProvider", function($routeProvider){
		// Configuro las URLs de la aplicación
		$routeProvider.when('/movies',{
			templateUrl: 'views/MoviesList.html'
		}).when('/series', {
			templateUrl: 'views/SeriesList.html'
		}).when('/people', {
			templateUrl: 'views/PeopleList.html'
		}).when('', {
			redirectTo: '/movies'
		}).when('/', {
			redirectTo: '/movies'
		}).otherwise({
			templateUrl: 'views/404.html'
		})
	}]
);
