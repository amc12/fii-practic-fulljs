class containerController{
    constructor(playerRsp) {
    	// Shared properties throughout the application
        this.players = playerRsp.data;
        this.userHeaders = ['Name', 'Email', 'Club', 'Date'];
        this.userKeys = ['name', 'email', 'club', 'date'];

        this.viewValue = 'player';
       
    }
}

containerController.$inject = ['playerRsp'];

angular.module('berger').controller('containerController', containerController);
