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
});