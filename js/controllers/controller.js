sap.controller('mainCtrl', function() {

	// main controller CODE

});//--------------end Ctrl----------------

sap.controller('menuActive', function($scope, $location){

	$scope.$on('$locationChangeStart', function(event) {
	$scope.location = $location.path();
	});

});


