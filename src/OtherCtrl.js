import template from './views/other-bottom-sheet-grid.html';

export default class OtherCtrl {
  
  constructor($mdBottomSheet) {
    "ngInject";
    Object.assign(this, { $mdBottomSheet });
  }
  
  showGrid() {
    console.log('showing grid!');
    this.$mdBottomSheet.show({
      templateUrl: template,
      controller: GridBottomSheetCtrl,
      controllerAs: 'ctrl',
      clickOutsideToClose: true
    });
  }
  
}

class GridBottomSheetCtrl {
  constructor() {
    this.actions = [
      { icon: 'account_balance', name: 'Balance' },
      { icon: 'android', name: 'Android' },
      { icon: 'image', name: 'Add Image' },
    ];
  }
}