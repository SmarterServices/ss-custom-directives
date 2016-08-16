(function () {
    'use strict';

    angular.module('ss.custom-directive')
        .directive('ssSelectList', ssSelectList);

    function ssSelectList() {
        //added changeState,pause,paste and fullScreen functions to scope of directive
        return {
            scope: {
                examPause: '=examPause',
                listItems: '=listItems',
                selectedItem: '=selectedItem',
                allowCustom: '=allowCustom'
            },
            link: linkFunc,
            templateUrl: 'app/proctor/ss.select.list.directive.html',
            controller: ssSelectListController,
            controllerAs: 'vm',
            bindToController: true,
            replace: true
        };

        function linkFunc(scope, el, attrs, ctrl) {
            console.log(el);//
            var $ul = $(el[0]).find('ul');
        }
    }

    ssSelectListController.$inject = ['$scope'];

    function ssSelectListController($scope) {
        var vm = this;

        activate();
        //vm.listItems = ['One', 'Two', 'Three'];
        //vm.listMetaData = [false, false, false];
        //vm.selectedItem = 'One';
        vm.setSelectedItem = setSelectedItem;
        vm.setCustomText = setCustomText;

        function activate() {
            vm.customText = '';
            var length = vm.listItems.length;
            vm.listMetaData = new Array(length+1);
            vm.listMetaData.fill(false);
            setSelectedItem(vm.selectedItem);
        }

        function setSelectedItem(item) {
            vm.customText = '';
            vm.selectedItem = item;
            var index = vm.listItems.indexOf(vm.selectedItem);
            vm.listMetaData.fill(false);
            vm.listMetaData[index] = true;
        }

        function setCustomText() {
            vm.selectedItem = vm.customText;
            vm.listMetaData.fill(false);
            vm.listMetaData[vm.listMetaData.length] = true;
        }
    }

})();
