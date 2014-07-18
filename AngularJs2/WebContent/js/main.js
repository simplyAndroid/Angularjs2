var advance = angular.module('advance', []);

advance.controller('Myvalue',function ($scope,$http) {
	$scope.i = 0; 
		$http({
			url:"data/data.json",
			method:"GET"
			
		})
		.success (function(resp){
			$scope.x=resp;	
		
			
			
			$scope.image1='images/'+ $scope.x.allProducts[$scope.i].image_path;
			$scope.image2='images/'+ $scope.x.allProducts[$scope.i].image_path1;
			$scope.product_info=$scope.x.allProducts[$scope.i].product_discription;
		});

		
		$scope.next=function(){
			
			$scope.i++ ;
			if($scope.i<7){
			$scope.image1='images/'+ $scope.x.allProducts[$scope.i].image_path;
			$scope.image2='images/'+ $scope.x.allProducts[$scope.i].image_path1;
			}
			
			else{$scope.i=-1;}
			
			
				$scope.product_info=$scope.x.allProducts[$scope.i].product_discription;
			};

			$scope.previous=function(){
				
				$scope.i-- ;
				if($scope.i>=0){
				$scope.image1='images/'+ $scope.x.allProducts[$scope.i].image_path;
				$scope.image2='images/'+ $scope.x.allProducts[$scope.i].image_path1;
				}
				
				else{$scope.i=7;}
					$scope.product_info=$scope.x.allProducts[$scope.i].product_discription;
				};
    });
    
    

var logo=function ($scope) {
	$scope.imagelogo = 'images/adv_logo_hd.png';
	

    //$scope.image1 = 'images/car2.jpg';
};

var car1=function ($scope) {
	$scope.imagecar1 = 'images/car1.gif';
};

var car2=function ($scope) {
	$scope.imagecar2 = 'images/car2.gif';
};

var car3=function ($scope) {
	$scope.imagecar3 = 'images/car3.gif';
};

var car4=function ($scope) {
	$scope.imagecar4 = 'images/car4.gif';
};




/*advance.directive('temp1', function() {
	
	  return {
		  restrict:"E",
		  templateUrl:"template/temp1.html",
	    	  };
	    	  
});*/



















