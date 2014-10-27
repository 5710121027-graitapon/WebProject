angular.module('testApp', [])
.controller('CarouselDemoCtrl', function($scope) {
	
	$scope.data = [
	{ image: '3778-11.jpg' },
	{ image: '3787-11.jpg' }
	];
	
	$scope.myInterval = 2000;
	$scope.slides = [
	{ image: '3778-11.jpg' },
	{ image: '3787-11.jpg' }
	];
})
.controller('ModalDemoCtrl', function ($scope, $modal) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
  };
  

})
.controller('ModalInstanceCtrl', function($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
  }

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  }

})
;