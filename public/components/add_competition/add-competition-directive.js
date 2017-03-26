const addCompetition = (competitionService) => {
	return {
		templateUrl: 'components/add_competition/add-competition.html',
		restrict: 'E',
		link: (scope) => {

			// General properties
            scope.competition = {
                name: '',
                players: []
            };

        	// Adds a new player
        	scope.addCompetition = () => {
        		if( scope.competition.name && scope.competition.players){
                    competitionService.addCompetition(scope.competition).then(() => {
                        competitionService.getCompetition().then((resp) => {
                            // General properties
				            scope.competition = {
				                name: '',
				                players: []
				            };

                            // Reset the form after success
                            scope.formModel.$setPristine();
                            scope.formModel.$setUntouched();
                        });
                    });
                }
        	}
		}
	}
}

addCompetition.$inject = ['competitionService'];

angular.module('berger').directive('addCompetition', addCompetition);