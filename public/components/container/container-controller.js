class containerController{
    constructor($state, viewService, playerRsp, competitionRsp, gamesRsp) {
    	// Shared properties throughout the application
        this.players = playerRsp.data;
        this.userHeaders = ['Name', 'Email', 'Club', 'Date'];
        this.userKeys = ['name', 'email', 'club', 'date'];

        this.competitions = competitionRsp.data;
        this.competitionHeaders = ['Name', 'Current Round', 'Total Rounds', 'Status', 'Date'];
        this.competitionKeys = ['name', 'current_round', 'rounds', 'status', 'date'];

        this.games = gamesRsp.data;

        // Set the current view based on what we loaded
        viewService.setViewValue($state.current.name);
        this.viewValue = viewService.getViewValue();
        this.subViewValue = viewService.getSubViewValue();

        if ($state.params && $state.params.compId) {
            this.currentCompId = $state.params.compId;
        }
    }
}

containerController.$inject = ['$state', 'viewService', 'playerRsp', 'competitionRsp', 'gamesRsp'];

angular.module('berger').controller('containerController', containerController);
