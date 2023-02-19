import { Telegraf } from 'telegraf';
import { getMainMenu } from '../menu/mainMenu.js';
import { getUserInfo, setUserInfo, parseContext } from '../utils/constants.js';

/**
 * @param bot {Telegraf} телеграм бот
 * @param authorized {boolean} авторизован ли пользователь
 * @return {void}
 */
const command = (bot, authorized) => {

  bot.command('start', async (ctx) => {
    // ctx.scene.enter('firstMeet');
    const data = parseContext(ctx);

    console.log(data.author);
    setUserInfo(data.author.id, { telegram: data.author.id, steps: { start: true } });
    console.log(getUserInfo(data.author.id));

    await ctx.reply(
      'Приветствую тебя в боте Ростуризм.\nЗдесь ты можешь распланировать свое путешествие по РФ и следить за актуальной информацией. Да и вообще тут круто!',
      getMainMenu(data.author.id)
    );
  });

}

export default command;
