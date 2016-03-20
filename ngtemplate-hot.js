/*

  A very simple ngtemplate implementation with very simple hot reloading
  
  It populates $templateCache with the templates, and causes the module
  to return the template key (to be used in templateUrl configs).
  
  When the templates are reloaded, the cache will be updated, and reload()
  called on the ui-router $state object. So totally hardcoded to ui-router.

*/

var ngModule = 'ng';
var appId = 'App';

module.exports = function(html){
  this.cacheable();
  return "" +
    "var data = " + JSON.stringify({
      ngModule: ngModule,
      appId: appId,
      key: this.resource.substring(this.context.length),
      html: html,
    }) + ";\n" +
    run.toString() + "; run(data);\n" +
    "module.exports = data.key;";
};

function run(data) {
  if (module.hot) {
    module.hot.accept();
    var $injector = angular.element(document.getElementById(data.appId)).injector();
    if ($injector) {
      var $templateCache = $injector.get('$templateCache');
      $templateCache.put(data.key, data.html);
      var $state = $injector.get('$state');
      $state.reload();
    } else {
      angular.module(data.ngModule).run(['$templateCache', function($templateCache){
        $templateCache.put(data.key, data.html);
      }]);
    }
  }
}

