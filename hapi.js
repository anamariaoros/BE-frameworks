const Hapi = require("hapi");
const port = 3002;
const server=Hapi.server({
    host:'localhost',
    port: 3002,
});

server.route([
  {
    method: 'GET',
    path: '/api/items',
    handler: function(request, reply) {
      return 'Hapi server says: Get item id';
    }
  },
  {
    method: 'GET',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      return 'Hapi server says: Get item id: ' + request.params.id;
    }
  },
  {
    method: 'POST',
    path: '/api/items',
    handler: function(request, reply) {
      return 'Hapi server says: Post item';
    }
  },
  {
    method: 'PUT',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      return 'Hapi server says: Put item id: ' + request.params.id;
    }
  },
  {
    method: 'DELETE',
    path: '/api/items/{id}',
    handler: function(request, reply) {
      return 'Hapi server says: Delete item id: ' + request.params.id;
    }
  },
  {
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      return 'Hapi server says: Hello world';
    }
  }
]);

server.start( function() {
    console.log("Hapi is listening to http://localhost:3002");
});
