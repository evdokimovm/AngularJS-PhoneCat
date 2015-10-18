var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
	function($scope, $http) {
		$http.get('data/phones.json').success(function(data) {
			$scope.phones = data;
		});

$scope.orderProp = 'age';

}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
	function($scope, $routeParams, $http) {
		$http.get('data/' + $routeParams.phoneId + '.json').success(function(data) {
			$scope.phone = data;
		});
	}]);
