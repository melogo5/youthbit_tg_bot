import { Markup } from 'telegraf';
import { menuItems, getUserInfo, webApp } from '../utils/constants.js';

function getMenuFromUserInfo(user) {
  if (user.steps.start !== true) return [];
  const menu = [];

  if (!user.steps.auth) {
    // предлагаем авторизоваться на сайте
    menu.push([Markup.button.webApp(menuItems.login, webApp + "/login")]);
  }

  if (user.steps.auth) {
    // авторизованные могут посмотреть свой профиль
    // в ответ придет сообщение и под ним будет inline-кнопка "редактировать" и "документы"
    // нажатие на "редактировать" открывает форму редактирования данных пользователя
    // фио / город / универ / курс / группа
    // нажатие на "документы" присылает сообщение-фотку (?) студенческого билета, если они есть, или же предлагает юзеру прислать файл-фотку студака боту
    menu.push([menuItems.profile]);
  }

  if (user.steps.auth) {
    menu.push([Markup.button.webApp(menuItems.travel, webApp + "/rooms-filters")]);
  }

  if (user.steps.auth /* && у пользователя есть хотя бы одна заявка */) {
    // показать сообщение "у вас вот такие путешествия"
    // и список кнопок с заявками пользователя
    // каждая кнопка открывает web-app с данными заявки или присылает сообщение с данными заявки (как проще)
    menu.push([menuItems.requests]);
  }

  return menu;
}

export function getMainMenu(telegram) {
  const user = getUserInfo(telegram);
  const menu = getMenuFromUserInfo(user);
  return Markup.keyboard(menu).resize();
}

export function clearMenu() {
  return Markup.removeKeyboard();
}
