var myApp = angular.module('myApp', []);
myApp.controller('fileEditor', function ($scope) {
  $scope.rows = [
    {columns:['Strength', '14', '+2']},
    {columns:['Intelligence', '14', '+2']},
    {columns:['Wisdom', '14', '+2']},
    {columns:['Constitution', '14', '+2']},
    {columns:['Dexterity', '14', '+2']},
    {columns:['Chrisma', '14', '+2']}
  ];
  $scope.columnTitles = ['Name', 'Total', 'Modifier'];
  $scope.addRow = function() {
    console.log($scope);
    $scope.rows.push([$scope.newRow.name, $scope.newRow.total, $scope.newRow.modifier]);
  };
});