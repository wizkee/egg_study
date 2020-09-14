// app/controller/user.js
const Controller = require("egg").Controller;
class UserController extends Controller {
  async info() {
    const { ctx } = this;
    const userId = ctx.params.id;
    const userInfo = await ctx.service.user.find(userId);
    ctx.body = userInfo;
    console.log('userId :>> ', userId);
  }
}
module.exports = UserController;
