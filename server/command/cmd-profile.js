import { Telegraf } from 'telegraf';
import { clearMenu, getMainMenu } from '../menu/mainMenu.js';
import { menu } from '../utils/constants.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @param authorized {boolean} авторизован ли пользователь
 * @return {void}
 */
const command = (bot, authorized) => {

  bot.hears(menu.profile, async ctx => {
    if (!authorized) {
      ctx.reply("Вы не авторизованы");
      return;
    };
    //вывести инфу и возможность заново заполнить

  })

}

export default command;
