const containerDirective = () => {
    return {
        templateUrl: 'components/container/container.html',
        restrict: 'E',
        link: (scope) => {

        	// Changes the view betweeen panels
            scope.changeSubView = (view) => {
                scope.contCtrl.subViewValue = view;
            }

            // Changes the view betweeen panels
        	scope.changeView = (view) => {
        		scope.contCtrl.viewValue = view;
        	}
        }
    };
};

containerDirective.$inject = [];

angular.module('berger').directive('containerDirective', containerDirective);

