import { Telegraf } from 'telegraf';
import { clearMenu, getMainMenu } from '../menu/mainMenu.js';
import { menu } from '../utils/constants.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @param authorized {boolean} авторизован ли пользователь
 * @return {void}
 */
const command = (bot, authorized) => {

  bot.hears(menu.login, async ctx => {
    await ctx.reply(`${authorized ? "Вы уже авторизованы!": "Начнем авторизацию"}`, clearMenu());
    if ( authorized) return;
    // возможно не сцена а прям полная авторизация через web apps
    // await ctx.scene.enter('firstMeet');
  })

}

export default command;
