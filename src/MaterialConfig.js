export default function MaterialConfig($mdThemingProvider) {
  "ngInject";
  $mdThemingProvider.theme('default')
    .primaryPalette('pink')
    .accentPalette('orange');
}