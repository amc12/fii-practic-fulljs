const gameComponent = (gameService) => {
    return {
        templateUrl: 'components/game/game.html',
        restrict: 'E',
        scope: {
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
                    });
                }
            }
        }
    }
}

gameComponent.$inject = ['gameService'];
angular.module('berger').directive('game', gameComponent);
