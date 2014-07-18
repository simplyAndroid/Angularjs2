var app = angular.module('myApp',["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider.when("/order",{
		templateUrl: 'template/order.html',
	    controller: 'sample',
	})
	.when("/account",{
		templateUrl: 'template/account.html',
	    controller: 'sample',
	});
/*.otherwise("/account");*/
});
app.controller("mine",function($scope){
	
});

app.controller("sample",function($scope){
	
});
