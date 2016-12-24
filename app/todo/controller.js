app.controller('main', main);

function main($scope, $rootScope, tasks) {
	// write debugger; to add a break point 
	$scope.header = "ToDo list";

	$scope.addTask = function() {
		if(!!$scope.newTaskName) {
			tasks.add($scope.newTaskName);
		}
	};

	$scope.tasks = tasks.get();

}

// changes!