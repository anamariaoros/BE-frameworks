const Koa = require("koa");
const route = require("koa-route");
const app = new Koa();
const port = 3001;

// REST API Koa 2
app.use(route.get("/api/items", ( ctx ) => {
    ctx.body = "Koa app says: Get items";
}));
// Example with Koa 1
// app.use(route.get('/api/users', function*() {
//     this.body = 'Get user with KOA 1';
// }));

app.use(route.get("/api/items/:id/", ( ctx , id ) => {
    ctx.body = "Koa app says: Get item with id: " + id;
}));
app.use(route.post("/api/items", ( ctx ) => {
    ctx.body = "Koa app says: Post items";
}));
app.use(route.put("/api/items/:id", ( ctx,id ) => {
    ctx.body = "Koa app says: Put item with id: " + id;
}));
app.use(route.delete("/api/items/:id", ( ctx, id ) => {
    ctx.body = "Koa app says: Delete item with id: " + id;
}));

// all other routes
app.use( (ctx) => {
  ctx.body = "Hello world";
});

const server = app.listen(port, function() {
  console.log("Koa is listening to http://localhost:3001");
});
