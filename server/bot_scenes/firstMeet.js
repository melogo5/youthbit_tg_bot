import {
  Telegraf,
  Markup,
  Composer,
  Scenes
} from 'telegraf';

import {
  getMainMenu
} from "./mainMenu.js";

const sceneStateContext = 'firstMeetData';

const updateState = (ctx, object, sceneCtx = sceneStateContext) => {
  ctx.wizard.state[sceneCtx] = {
    ...ctx.wizard.state[sceneCtx],
    ...object
  };
};

const greetings = new Composer();
greetings.on('text', async (ctx) => {
  ctx.wizard.state[sceneStateContext] = {};
  // await ctx.reply(`Привет, ${ctx.message.from.first_name} !`);
  // await ctx.reply(`Давай знакомиться.`);
  await ctx.reply(`Как твоё имя?`);
  return ctx.wizard.next();
});

const firstName = new Composer();
firstName.on('text', async (ctx) => {
  updateState(ctx, {
    name: ctx.message.text
  });
  await ctx.reply(`Отлично, а фамилия?`);
  return ctx.wizard.next();
});

const lastName = new Composer();
lastName.on('text', async (ctx) => {
  updateState(ctx, {
    surname: ctx.message.text
  });
  await ctx.reply(
    `Замечательно! Мальчик или девочка? :)`,
    Markup.inlineKeyboard([
      Markup.button.callback('М', 'gender_man'),
      Markup.button.callback('Ж', 'gender_woman'),
    ])
  );
  return ctx.wizard.next();
});

const askForAge = async (ctx) => {
  await ctx.reply('И последний вопрос. Сколько тебе лет?');
  return ctx.wizard.next();
};

const gender = new Composer();
gender.action('gender_man', (ctx) => {
  updateState(ctx, {
    gender: 'man'
  });
  askForAge(ctx);
});
gender.action('gender_woman', (ctx) => {
  updateState(ctx, {
    gender: 'woman'
  });
  askForAge(ctx);
});

const age = new Composer();
age.on('text', async (ctx) => {
  updateState(ctx, {
    age: ctx.message.text
  });
  await ctx.reply('Спасибо!');
  console.log(ctx.wizard.state[sceneStateContext]);
  await ctx.reply('Авторизация завершена', getMainMenu(true));
  return ctx.scene.leave();
});

const meetScene = new Scenes.WizardScene('firstMeet', greetings, firstName, lastName, gender, age);

export const stage = new Scenes.Stage([meetScene]);