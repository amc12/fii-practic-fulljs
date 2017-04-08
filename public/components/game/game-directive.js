const gameComponent = ($rootScope, gameService) => {
    return {
        templateUrl: 'components/game/game.html',
        restrict: 'E',
        scope: {
            competitions: '=',
            allGames: '=',
            gameData: '=', //{p1_id : '', p2_id: ''}
            players: '=', //[player]
        },
        link: (scope) => {
            scope.game = {
                status: '2' //draw
            }

            scope.playerOne = scope.players.filter((obj) => obj._id === scope.gameData.p1_id)[0];
            scope.playerTwo = scope.players.filter((obj) => obj._id === scope.gameData.p2_id)[0];

            scope.endGame = () => {
                if (scope.game.status) {
                    const gameData = angular.copy(scope.gameData);
                    gameData.status = scope.game.status;
                    gameData.id = gameData._id;

                    delete gameData._id;
                    gameService.endGame(gameData).then((rsp) => {
                    	scope.gameData = rsp.data;
                        scope.allGames.forEach((obj) => {
                            if (obj._id === scope.gameData._id) {
                                obj.status = scope.gameData.status;
                            }
                        });
                        $rootScope.$broadcast('gameFinished', 1);
                    });
                }
            }
        }
    }
}

gameComponent.$inject = ['$rootScope', 'gameService'];

angular.module('berger').directive('game', gameComponent);
