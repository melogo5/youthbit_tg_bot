import { default as startCmd } from "./cmd-start.js";
import { default as helpCmd } from "./cmd-help.js";
import { default as loginCmd } from "./cmd-login.js";
import { default as profileCmd } from "./cmd-profile.js";
import { default as tripCmd } from "./cmd-trip.js";

const commands = {
  startCmd,
  helpCmd,
  loginCmd,
  profileCmd,
  tripCmd
};

export default commands;

// TODO:
// bot.hears(menu.pathView, async ctx => {
//   if (!authorized) {
//     ctx.reply("Вы не авторизованы");
//     return;
//   };
// })
