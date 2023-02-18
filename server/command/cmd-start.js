import { Telegraf } from 'telegraf';
import { getMainMenu } from '../menu/mainMenu.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @param authorized {boolean} авторизован ли пользователь
 * @return {void}
 */
const command = (bot, authorized) => {

  bot.command('start', async (ctx) => {
    // ctx.scene.enter('firstMeet');
    await ctx.reply(
      'Приветствую тебя в боте Ростуризм. Здесь ты можешь распланировать свое путешествие по РФ и следить за актуальной информацией.',
      getMainMenu(authorized)
    );
  });

}

export default command;
