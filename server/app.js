import {
  Telegraf,
  session
} from 'telegraf';

import { stage as firstMeetScene } from './bot_scenes/firstMeet.js';

const token = '5969288783:AAGsRdbhsqrgBkfv6GwAezpva1OJq3AnjcY';
const bot = new Telegraf(token);

bot.use(session());
bot.use(firstMeetScene.middleware());

bot.command('start', async (ctx) => {
  ctx.scene.enter('firstMeet');
});

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