let _viewValue;
let _subViewValue;

class viewService {
    constructor() {
        _viewValue = 'manager';
        _subViewValue = 'player';
    }

    setViewValue(view) {
        _viewValue = view;
    }

    getViewValue() {
        return _viewValue;
    } 

    setSubViewValue(view) {
        _subViewValue = view;
    }

    getSubViewValue() {
        return _subViewValue;
    }
}

viewService.$inject = [];

angular.module('berger').service('viewService', viewService);
