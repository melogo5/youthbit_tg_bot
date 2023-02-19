import { Telegraf } from 'telegraf';
import { clearMenu, getMainMenu } from '../menu/mainMenu.js';
import { menuItems } from '../utils/constants.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @param authorized {boolean} авторизован ли пользователь
 * @return {void}
 */
const command = (bot, authorized) => {

  bot.hears(menuItems.trip, async ctx => {
    if (!authorized) {
      ctx.reply("Вы не авторизованы");
      return;
    };

    //открыть пейджу с фильрами
  });

}

export default command;
