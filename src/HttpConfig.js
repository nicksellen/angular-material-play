export default function HttpConfig($httpProvider){
  "ngInject";
  $httpProvider.interceptors.push(HttpErrorInterceptor);
}

function HttpErrorInterceptor($q, $injector){
  "ngInject";
  let $mdToast;
  function ensureMdToast() {
    if (!$mdToast) $mdToast = $injector.get('$mdToast');
  }
  return {
    
    requestError(rejection) {
      console.log('request error!', rejection);
      return $q.reject(rejection);
    },
    
    responseError(rejection) {
      ensureMdToast();
      $mdToast.show($mdToast.simple().textContent(rejection.statusText));
      return $q.reject(rejection);
    }
    
  };
}
