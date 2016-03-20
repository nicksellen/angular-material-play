import fooDirectiveTemplate from './fooDirectiveTemplate.html'

export default function FooDirective() {
  "ngInject";
  return {
    restrict: 'E',
    templateUrl: fooDirectiveTemplate,
    scope: {}
  };
}