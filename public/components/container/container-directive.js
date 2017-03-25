const containerDirective = () => {
    return {
        templateUrl: 'components/container/container.html',
        restrict: 'E',
        link: (scope) => {}
    };
};

containerDirective.$inject = [];

angular.module('berger').directive('containerDirective', containerDirective);

