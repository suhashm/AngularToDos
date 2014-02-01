var todoModule = angular.module('todoModule',['LocalStorageModule']);

todoModule.controller('todoController',function($scope, localStorageService){
    /*$scope.todoItems=['Item1' , 'Item2' , 'Item3'];*/
    //$scope.todoItems=[];
    var todoInStore = localStorageService.get('todoItems');
    $scope.todoItems = todoInStore && todoInStore.split('\n') || [];
    $scope.$watch(function(){
        localStorageService.add('todoItems', $scope.todoItems.join('\n'));
    })

    $scope.addTodo = function(){
        $scope.todoItems.push($scope.newTodo);
        $scope.newTodo='';
    }

    $scope.removeTodo = function(index){
        $scope.todoItems.splice(index,1);
    }
});