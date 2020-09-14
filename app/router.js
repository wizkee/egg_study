// app/router.js
module.exports = (app) => {
  const client1 = app.mysql.get('user');

  console.log('1112 :>> ', client1);

  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/news", controller.news.list);
  router.get("/good", controller.goods.index);
  app.router.get('/user/:id', app.controller.user.info);
};
