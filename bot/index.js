import { Telegraf, session } from 'telegraf';
import { stage as firstMeetScene } from './scene/firstMeet.js';
import config from "../config/index.js";
import commands from "./command/index.js";

const bot = new Telegraf(config.telegram.bot.token);
let authorized = true; //тут прикрутить логику проверки асторизованности пользователя

console.log(config);

// bot.use(session());
// bot.use(firstMeetScene.middleware());

commands.startCmd(bot, authorized);
commands.helpCmd(bot);
commands.loginCmd(bot, authorized);
commands.profileCmd(bot, authorized);
// commands.tripCmd(bot, authorized);

bot.on('callback_query', async (ctx) => {
  // Explicit usage
  await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

  // Using context shortcut
  await ctx.answerCbQuery();
});

bot.on('inline_query', async (ctx) => {
  const result = [];
  // Explicit usage
  await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

  // Using context shortcut
  await ctx.answerInlineQuery(result);
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
