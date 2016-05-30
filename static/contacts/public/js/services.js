'use strict';

app.factory("Contact", function($resource, $http) {
  //$http.defaults.headers.post['CSRF_COOKIE']=global_token;
  var resource = $resource("/api/contacts/:id", { id: "@_id" },
    {
      'create':  { method: 'POST' },
      'index':   { method: 'GET', isArray: true },
      'show':    { method: 'GET', isArray: false },
      'update':  { method: 'PUT' },
      'destroy': { method: 'DELETE' }
    }
  );

  return resource;
});