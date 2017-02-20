(function() {
  'use strict';
  
  angular.module('RealEstateTrackerApp')
    .component('tableComponent', {
      templateUrl: '../templates/table.html',
      controller: TableCtrl
    });
})();