angular.module('testApp', [])
.controller('CarouselDemoCtrl', function($scope) {
	
	
	$scope.myInterval = 5000;
	$scope.slides = [
	  { image: 'teacher_day.jpg' },
	  { image: 'กีฬาสัมพันธ์.jpg' },
	  { image: 'ปลูกป่า.jpg' }    
	];
})
.controller('ModalDemoCtrl', function ($scope, $rootScope, $modal) {


  $rootScope.imgs = [
  ];


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
.controller('ModalInstanceCtrl', function($scope, $modalInstance, items) {

 
  $scope.ok = function () {
    $modalInstance.dismiss('cancel');
  }

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  }

})
;