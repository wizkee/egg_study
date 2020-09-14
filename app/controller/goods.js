// app/controller/news.js
const Controller = require("egg").Controller;

class GoodsController extends Controller {
  async item() {
      console.log('global :>> ', global);
    const dataList = {
      items: [
        { id: 1, title: "itemss", url: "/news/1" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
      ],
      list: [
        { id: 1, title: "gooods", url: "/news/1" },
        { id: 2, title: "this is news 333", url: "https://www.zhihu.com/" },
      ],
    };
    await this.ctx.render("goods/item.tpl", dataList);
  }

  async index() {
    this.ctx.body = "Hello worlaaaad";
  }
}

module.exports = GoodsController;