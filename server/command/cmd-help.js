import { Telegraf } from 'telegraf';
// import { getMainMenu } from '../menu/mainMenu.js';
import {commandsList} from '../utils/constants.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @return {void}
 */
const command = (bot) => {

  bot.help(async ctx => {
    await ctx.reply(commandsList);
  })

}

export default command;
