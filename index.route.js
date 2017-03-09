(function(){
  angular
    .module('myApp')
    .config(configuration)
    .controller('tabCtrl' , tabCtrl);

    function configuration($stateProvider, $urlRouterProvider){ //stateProvider
      $stateProvider
        .state('movie',{
          url: '/movie',
          templateUrl: 'components/movies/movies.view.html',
          controller: 'movieController',
          controllerAs: 'movieCtrl'
        })

        $urlRouterProvider.otherwise('/movie');
    }
    function tabCtrl($scope, $location, $log) {
        $scope.selectedIndex = 0;

        $scope.$watch('selectedIndex', function(current, old) {
            switch (current) {
                case 0:
                    $location.url("/movie");
                    break;
                case 1:
                    $location.url("/movie");
                    break;
                case 2:
                    $location.url("/movie");
                    break;
            }
        });
    }

})();
