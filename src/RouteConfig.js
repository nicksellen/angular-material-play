import MainCtrl from './MainCtrl';
import OtherCtrl from './OtherCtrl';

import home from './views/home.html';
import other from './views/other.html';

export default function RouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  "ngInject";
  
  $locationProvider.html5Mode(true);
  
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: home,
    controller: MainCtrl,
    controllerAs: 'ctrl'
  });
  
  $stateProvider.state('other', {
    url: '/other',
    templateUrl: other,
    controller: OtherCtrl,
    controllerAs: 'ctrl'
  });

}
