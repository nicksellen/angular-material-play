export default class MainCtrl {
  
  constructor(someService, $mdSidenav) {
    "ngInject";
    Object.assign(this, { someService, $mdSidenav });
    //this.getThings();
  }
  
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  }
  
  getThings() {
    this.someService.repos().then(repos => {
      this.repos = repos;
    });
  }
  
  getThingsWithError() {
    this.someService.fooWithError().then(result => {
      let { entries } = result;
      this.entries = entries;
    });
  }
  
}
