// app/controller/news.js
const Controller = require("egg").Controller;

class NewsController extends Controller {
  async list() {
    console.log('this.app :>> ', this.app);

    const dataList = {
      list: [
        { id: 1, title: "this is news 1", url: "/news/1" },
        { id: 2, title: "this is news 2", url: "/news/2" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
      ],
    };
    await this.ctx.render("news/list.tpl", dataList);
  }
}

module.exports = NewsController;