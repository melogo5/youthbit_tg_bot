import {
  Telegraf,
  session
} from 'telegraf';

import {
  stage as firstMeetScene
} from './bot_scenes/firstMeet.js';
import {
  getMainMenu,
  clearMenu
} from './bot_scenes/mainMenu.js';
import {
  commands, menu
} from './utils/constants.js';

const token = '5969288783:AAGsRdbhsqrgBkfv6GwAezpva1OJq3AnjcY';
const bot = new Telegraf(token);
let authorized = false; //тут прикрутить лог ику проверки асторизованности пользователя  

bot.use(session());
bot.use(firstMeetScene.middleware());

bot.command('start', async (ctx) => {
  // ctx.scene.enter('firstMeet');
  await ctx.reply(
    'Приветствую тебя в боте Ростуризм. Здесь ты можешь распланировать свое путешествие по РФ и следить за актуальной информацией.',
    getMainMenu(authorized)
  );
});

bot.help(async ctx => {
  await ctx.reply(commands);
})

bot.hears(menu.login, async ctx => {
  await ctx.reply(`${authorized ? "Вы уже авторизованы!": "Начнем авторизацию"}`, clearMenu());
  if ( authorized) return;
  // возможно не сцена а прям полная авторизация через web apps
  await ctx.scene.enter('firstMeet');
})

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