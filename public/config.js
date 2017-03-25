// Setting up routes
angular.module('berger')
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

        // States for my app
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'containerController',
                controllerAs: 'contCtrl',
                template: '<container-directive></container-directive>',
                resolve: {
                    playerRsp: ['playerService', (playerService) => {
                        return playerService.getPlayers().then((rsp) => {
                            return rsp;
                        });
                    }]
                }
            });

        // For unmatched routes:
        $urlRouterProvider.otherwise('/');
    }]);

//Setting HTML5 Location Mode
angular.module('berger')
    .config(['$locationProvider',
        function($locationProvider){
            $locationProvider.hashPrefix('!');
        }
    ]);