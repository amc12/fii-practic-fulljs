const containerDirective = (viewService) => {
    return {
        templateUrl: 'components/container/container.html',
        restrict: 'E',
        link: (scope) => {

        	// Changes the view betweeen panels
            scope.changeSubView = (view) => {
                viewService.setSubViewValue(view);
                scope.contCtrl.subViewValue = view;
            }

            // Changes the view betweeen panels
        	scope.changeView = (view) => {
                viewService.setViewValue(view);
        		scope.contCtrl.viewValue = view;
        	}
        }
    };
};

containerDirective.$inject = ['viewService'];

angular.module('berger').directive('containerDirective', containerDirective);

