export default class SomeService {
  
  constructor($http) {
    "ngInject";
    Object.assign(this, { $http });
  }
  
  foo() {
    return this.$http.get('/api/foo').then(res => {
      return res.data;
    });
  }
  
  fooWithError() {
    return this.$http.get('/api/foo2').then(res => {
      return res.data;
    });
  }
  
  repos() {
    return this.$http.get('https://api.github.com/users/nicksellen/repos').then(res => {
      return res.data;
    });
  }
  
}