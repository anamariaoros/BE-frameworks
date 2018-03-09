const express = require('express');
const app = express();
const router = express.Router();

// REST API
router.route('/items')
.get(function(req, res, next) {
  res.send('Get items in express app');
})
.post(function(req, res, next) {
  res.send('Post items in express app');
});

router.route('/items/:id')
.get(function(req, res, next) {
  res.send('Get id: ' + req.params.id +"items in express app");
})
.put(function(req, res, next) {
  res.send('Put id: ' + req.params.id+"items in express app");
})
.delete(function(req, res, next) {
  res.send('Delete id: ' + req.params.id+"items in express app");
});

app.use('/api', router);

// index
app.get('/', function(req, res) {
  res.send('Hello world');
});

const server = app.listen(3000, function() {
  console.log('Express is listening to http://localhost:3000');
});
