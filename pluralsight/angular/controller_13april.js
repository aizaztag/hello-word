(function () {
    var app = angular.module('githubViewer' , []);
    var MainController = function($scope, github , $interval , $log , $location , $anchorScroll) {

        var person = {
            firstname: 'aizaz',
            lastname: 'aziz',
            imgSource: 'http://aspira.ie/wp-content/uploads/2016/07/bartopen_source_10932-600x330.jpg',
        };

        //$scope.message = "Hello Bae";
        //$scope.person  = person;
        var Error = function(response) {
            $scope.error = 'ERRRRRoR';
        }
        var OnUserComplete = function(data) {
            $scope.user = data;
            github.getRepos($scope.user).then(onRepos , Error);
        };
        var countInterval = null;
        $scope.search = function(username) {
            $log.info(username);
            github.getUser(username).then(OnUserComplete, Error);
            if(countInterval){
                $interval.cancel(countInterval);
                $scope.countdown=null;
            }


        };

        var starCountDown = function () {
            countInterval = $interval(decrementCountdown  , 1000 , $scope.countdown);
        };

        var decrementCountdown  = function(){
            $scope.countdown -=1;
            if($scope.countdown < 1){
                $scope.search($scope.username);
            }
        }

        var onRepos = function (data) {
               $scope.repos = data;
               $location.hash('userdetails');
               $anchorScroll();
        };
       $scope.username = 'angular';
       $scope.message = 'Github Viewer';
       $scope.repoSortOrder = "+name";
       $scope.countdown = 5;
        starCountDown();
    };
   // angular.module('githubViewer', ['githubViewer.services']);
    app.controller('MainController' , MainController);

}());