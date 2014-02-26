var myApp = angular.module('myApp', []);
function fileCtrl($scope) {
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
    $scope.rows.push({columns:[$scope.newRow.name, $scope.newRow.total, $scope.newRow.modifier]});
  };
  $scope.editRow = function() {
    for (var i = 0; i < $scope.rows.length; ++i) {
      if ($scope.rows[i].$$hashKey === $scope.filteredRows[0].$$hashKey) {
        $scope.rows[i] = {columns:[$scope.newRow.name, $scope.newRow.total, $scope.newRow.modifier]};
      }
    }
  };
  $scope.deleteRow = function() {
    for (var i = 0; i < $scope.rows.length; ++i) {
      if ($scope.rows[i].$$hashKey === $scope.filteredRows[0].$$hashKey) {
        $scope.rows.splice(i, 1);
      }
    }
  }
}
fileCtrl.$inject = ['$scope'];
myApp.controller('fileEditor', fileCtrl);