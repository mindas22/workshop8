var myApp = angular.module('myModule', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/basic-template.html',
            controller: 'BasicController'
        })
        .when('/faq', {
            templateUrl: 'partials/faq.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);


myApp.controller('myFirstController', function($scope) {

	var todoItems = [];

	$scope.todoItems = todoItems;
	// should change name for todos
	$scope.makeNewTodoItem = function () {
		$scope.todoItems.push(
			{
				name: $scope.todos.name,
				description: $scope.todos.description
			}
		);
	};

	$scope.deleteTodoItem = function ($index) {

		$scope.todoItems.splice($index, 1);

	};
});

