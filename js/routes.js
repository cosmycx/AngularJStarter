var sap = angular.module('sap', ['ngRoute', 'hljs']);

sap.config(['$routeProvider',function($routeProvider){
  $routeProvider.
    when('/', {
        templateUrl: './partials/view1.html',
        controller: 'mainCtrl'
    }).
    when('/main', {
        templateUrl: './partials/view2.html',
        controller: 'mainCtrl'
    }).
	when('/routes', {
		templateUrl: './partials/view3.html',
	    controller: 'mainCtrl'
  	}).
    when('/js', {
        templateUrl: './partials/view4.html',
        controller: 'mainCtrl'
    }).
    otherwise({
        redirectTo: '/'
    });
}
]);
